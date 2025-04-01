import { config } from "dotenv"

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local`}) //O path aponta para o arquivo .env. Isso vai extrair todas as variávies de ambiente. E será possível exportá-las desse arquivo

export const { 
    PORT, 
    NODE_ENV, 
    DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN,
    ARCJET_ENV, ARCJET_KEY,
    QSTASH_TOKEN, QSTASH_URL
} = process.env;