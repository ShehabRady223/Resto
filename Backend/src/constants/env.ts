function getEnv(key: string, defaultValue?: string): string {
    const value = process.env[key] || defaultValue;
    if(value === undefined){
        throw new Error(`Missing enviroment variable ${key}`)
    }
    return value;
}

export const MONGO_URL = getEnv('MONGO_URL')
export const PORT = getEnv('PORT','3000')