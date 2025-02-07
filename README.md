1. File & Directory Structure

src/
├── api/
│ └── endpoints.js # API endpoint configurations
│ └── apiClient.js # Centralized API client
├── components/
│ ├── common/ # Reusable components
│ ├── layout/ # Layout components
│ └── features/ # Feature-specific components
├── hooks/
│ ├── api/ # API-related hooks
│ └── common/ # General purpose hooks
├── context/ # Context providers
├── utils/ # Helper functions
├── constants/ # Constants and enums
└── types/ # TypeScript types/interfaces

2. File Naming Conventions
   Use PascalCase for components: MessageList.jsx
   Use camelCase for hooks: useMessageApi.js
   Use kebab-case for utilities: api-client.js
   Add .component.jsx suffix for components
   Add .hook.js suffix for hooks

3. API Client
   src/api/apiClient.js

4. Context Providers
   src/context/ChatContext.jsx

5. Hooks
   src/hooks/api/useAuth.js
   src/hooks/api/useChat.js
   src/hooks/common/useLocalStorage.js

6. Constants
   src/constants/endpoints.js
