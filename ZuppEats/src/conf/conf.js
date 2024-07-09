const conf={
    appWriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    
    appWriteRestauantCollectionId: String(import.meta.env.VITE_APPWRITE_REST_COLLECTION_ID),
    appWriteMenuCollectionId:String(import.meta.env.VITE_APPWRITE_MENU_COLLECTION_ID)
}


export default conf;