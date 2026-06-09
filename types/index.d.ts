interface Resume {
    id: string;
    companyName?: string;
    jobTitle?: string;
    imagePath: string;
    resumePath: string;
    feedback: Feedback;
}

interface Feedback {
    overallScore: number;
    ATS: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
        }[];
    };
    toneAndStyle: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
            explanation: string;
        }[];
    };
    content: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
            explanation: string;
        }[];
    };
    structure: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
            explanation: string;
        }[];
    };
    skills: {
        score: number;
        tips: {
            type: "good" | "improve";
            tip: string;
            explanation: string;
        }[];
    };
}

interface PuterUser {
    uuid: string;
    username: string;
    email_confirmed: boolean;
}

interface FSItem {
    id: string;
    name: string;
    path: string;
    is_dir: boolean;
    size?: number;
    modified?: number;
    created?: number;
}

interface KVItem {
    key: string;
    value: string;
}

type ChatMessageContent =
    | string
    | Array<
          | {
                type: "text";
                text: string;
            }
          | {
                type: "file";
                puter_path: string;
            }
      >;

interface ChatMessage {
    role: "system" | "user" | "assistant";
    content: ChatMessageContent;
}

interface PuterChatOptions {
    model?: string;
    stream?: boolean;
    max_tokens?: number;
    temperature?: number;
    [key: string]: unknown;
}

interface AIResponse {
    message?: {
        content?: string;
    };
    text?: string;
    [key: string]: unknown;
}
