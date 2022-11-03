# azure-df-demo

Very simple Azure Durable Functions app to show off the basics of an orchestrator calling activities, and show how the Durable Functions Extension makes it seem like our custom code pauses and resumes by watching `context.df.isReplaying` as it executes.

## Running

1. Open in VSCode with the Azure Functions extension installed (the extension should be recommended if you don't have it already).
2. Make sure the Azure Storage Emulator is running.
3. Hit F5
4. Wait for the functions host to start up.
5. Navigate to <http://localhost:7071/api/orchestrators/DemoOrchestrator>.
6. Look at the console output, specifically looking at when `Functions.DemoOrchestrator` starts and finishes, and what is written to the log.
