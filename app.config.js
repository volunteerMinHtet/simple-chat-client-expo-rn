export default function ({ config }) {
    return {
        ...config,
        name: process.env === "production" ? "Simple Chat" : "Simple Chat Dev",
        android: {
            package:
                process.env === "production"
                    ? "com.penguincrab.simple_chat"
                    : "com.penguincrab.simple_chat_dev",
        },
        runtimeVersion: {
            policy: "sdkVersion",
        },
        updates: {
            url: "https://u.expo.dev/63cb4453-e4ce-46d2-881f-28f333896063",
        },
        extra: {
            eas: {
                projectId: "63cb4453-e4ce-46d2-881f-28f333896063",
            },
        },
        jsEngine: "hermes",
        plugins: [
            [
                "@config-plugins/react-native-webrtc",
                {
                    cameraPermission:
                        "Allow $(PRODUCT_NAME) to access your camera :)",
                    microphonePermission:
                        "Allow $(PRODUCT_NAME) to access your microphone :)",
                },
            ],
            "expo-community-flipper",
        ],
    };
}
