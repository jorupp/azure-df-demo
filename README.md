# azure-df-demo

Very simple Azure Durable Functions app to show off the basics of an orchestrator calling activities, and show how the Durable Functions Extension makes it seem like our custom code pauses and resumes by watching `context.df.isReplaying` as it executes.

## Running

1. Open in VSCode with the Azure Functions extension installed.
2. Hit F5
3. Wait for the functions host to start up.
4. Navigate to <http://localhost:7071/api/orchestrators/DemoOrchestrator>.
5. Look at the console output, specifically looking at when `Functions.DemoOrchestrator` starts and finishes, and what is written to the log.
