export type EnvType = "local" | "prod";

export const getAppEnv = (): EnvType => {
    const currentHost = window.location.hostname;
    if (/.*localhost.*/.test(currentHost)) {
        return "local";
    } else {
        return "prod";
    }
};

export interface AppConfig {
    type: "local" | "prod";
    backendUrl: string;
}

const localConfig: AppConfig = {
    type: "local",
    backendUrl: "http://localhost:8000",
};

const prodConfig: AppConfig = {
    type: "prod",
    backendUrl: "http://localhost:8000",
};

const getConfig = (): AppConfig => {
    const env = getAppEnv();
    switch (env) {
        case "local":
            return localConfig;
        case "prod":
            return prodConfig;
        default:
            throw new Error("Unknown env was used in app configuration");
    }
};

export default {
    ...getConfig(),
};
