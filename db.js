import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            dbName: "lenslight",
        });
        
        console.log("Veri Tabanı Bağlantısı Başarılı.");

    } catch (err) {
        console.error(`Bağlantı Hatası Oluştu: ${err.message}`);
    }
};

export default connectDB;