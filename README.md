# Mock AI Interviewer

Welcome to the Mock AI Interviewer web app! This application provides a realistic interview experience by simulating technical interviews tailored to your job position, tech stack, and years of experience.

## Features

-   **Customizable Interviews**: Start or add new interviews based on your job position, tech stack, and years of experience.
-   **Multi-Modal Responses**: Answer questions using your webcam and voice for a lifelike experience, or type your responses if you prefer.
-   **Instant Feedback**: Receive instant ratings and detailed feedback on your performance once you complete the interview.
-   **Secure Authentication**: Easily sign in with Google, Gmail, or GitHub for a seamless and secure experience.

## Demo

Check out the demo of the Mock AI Interviewer web app [here](https://mock-ai-interviewer.vercel.app).

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/rakib-siddiki/Mock-Ai-Interviewer.git
    cd Mock-Ai-Interviewer
    ```

2. **Install dependencies**:

    ```sh
    # using npm
    npm install

    # using yarn
    yarn install

    # using bun
    bun install

    # using pnpm
    pnpm install
    ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your environment variables. Example:

    ```sh
    KINDE_CLIENT_ID=your_kinde_client_id
    KINDE_CLIENT_SECRET=your_kinde_client_secret
    KINDE_ISSUER_URL=your_kinde_issuer_url
    KINDE_SITE_URL=your_site_url
    KINDE_POST_LOGOUT_REDIRECT_URL=your_post_logout_redirect_url
    KINDE_POST_LOGIN_REDIRECT_URL=your_post_login_redirect_url
    NEXT_PUBLIC_KINDE_PASSWORD_LESS_CONNECTION_ID=your_password_less_connection_id
    NEXT_PUBLIC_KINDE_GITHUB_CONNECTION_ID=your_github_connection_id
    NEXT_PUBLIC_KINDE_GOOGLE_CONNECTION_ID=your_google_connection_id
    DATABASE_URL=your_database_url
    GEMINI_API_KEY=your_gemini_api_key
    QUESTION_AMOUNT=your_question_amount
    ```

4. **Run the development server**:

    ```sh
    # using npm
    npm run dev

    # using yarn
    yarn dev

    # using bun
    bun dev

    # using pnpm
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Sign In**: Sign in using your Google, Gmail, or GitHub account.
2. **Start Interview**: Select your job position, tech stack, and years of experience to start a new interview.
3. **Answer Questions**: Use your webcam and voice to answer questions or type your responses.
4. **Receive Feedback**: Get instant ratings and detailed feedback on your interview performance.

## Technologies Used

-   **Frontend**: Next.js, TypeScript,Tailwind CSS,Shadcn,Framer-motion
-   **Backend**: Drizzle ORM, PostgreSQL
-   **Authentication**: Kinde Auth

## Contact

If you have any questions or suggestions, feel free to reach out:

-   **Name**: Rakib Siddiki
-   **Email**: [rmrakib901@gmail.com](mailto:rmrakib901@gmail.com)
-   **GitHub**: [rakib-siddiki](https://github.com/rakib-siddiki)

---

Thank you for using the Mock AI Interviewer web app! We hope it helps you prepare effectively for your technical interviews.
