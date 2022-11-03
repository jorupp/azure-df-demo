/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

// start via http://localhost:7071/api/orchestrators/DemoOrchestrator
import * as df from "durable-functions"

const orchestrator = df.orchestrator(function* (context) {

    context.log(`Calling DemoActivityGetItems - ${context.df.isReplaying}`);
    const items: string[] = yield context.df.callActivity("DemoActivityGetItems");
    context.log(`Got ${items.length} items from DemoActivityGetItems - ${context.df.isReplaying}`);

    const tasks = [];
    for(const item of items) {
        context.log(`Calling DemoActivityProcessItem for ${item} - ${context.df.isReplaying}`);
        tasks.push(context.df.callActivity("DemoActivityProcessItem", item));
    }

    context.log(`Waiting for DemoActivityProcessItem calls - ${context.df.isReplaying}`);
    yield context.df.Task.all(tasks);
    context.log(`Done waiting for DemoActivityProcessItem calls - ${context.df.isReplaying}`);

    context.log(`Calling DemoActivityCreateSummary - ${context.df.isReplaying}`);
    yield context.df.callActivity("DemoActivityCreateSummary", items);
    context.log(`Called DemoActivityCreateSummary - ${context.df.isReplaying}`);
});

export default orchestrator;
