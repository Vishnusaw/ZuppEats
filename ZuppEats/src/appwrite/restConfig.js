import conf from "../conf/conf";
import {Client,ID,Databases,Storage,Query} from "appwrite"


export class Service{
    
    client  = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }



    async getRestaurants(){ 

        try{
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteRestauantCollectionId,
            )
        }catch(error){
            console.log("Appwrite Service : getRestaurants error",error);
            return false
        }
    }


    async getMenuByRestaurants(restaurantId){ 

        try{
            const queries = [Query.equal("restaurants",restaurantId)]
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteMenuCollectionId,
                queries
            )
        }catch(error){
            console.log("Appwrite Service : getMenuByRestaurants error",error);
            return false
        }
    }


    


    async getFilePreview(fileId){

        try{
            const imageFile = this.bucket.getFilePreview(
                conf.appWriteBucketId,
                fileId
            )
            return imageFile;

        }catch(error){
            console.log("Appwrite Service : getFilePreview error:",error);
        }
    }



}


const service = new Service();
export default service;




