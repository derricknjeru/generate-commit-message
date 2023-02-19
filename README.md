# generate-commit

## <img src="https://github.com/derricknjeru/generate-commit-message/blob/main/art/home.png" height="500">

## Installation

1. Install the CLI:

   ```sh
   npm install -g generate-commit-message
   ```

2. Obtain your API key from [OpenAI](https://platform.openai.com/account/api-keys)

   > Note: If you have not done so yet, you will need to register an account with OpenAI.

3. Set openai key

   ```sh
   echo "OPENAI_API_KEY=<your token>" >> .env
   ```

## Usage

1. Generating commit messages:

   ```sh
   g-commit -g
   ```

2. Staging changes

   ```sh
   g-commit -a
   ```
