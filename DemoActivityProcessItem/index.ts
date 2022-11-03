/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 * 
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */

import { AzureFunction, Context } from "@azure/functions"

const activityFunction: AzureFunction = async function (context: Context): Promise<void> {
    const delay = Math.floor(Math.random()*3000);
    context.log(`DemoActivityProcessItem - processing ${context.bindings.name} - will wait ${delay} ms`);
    await new Promise((res) => setTimeout(res, 2000));
    context.log(`DemoActivityProcessItem - processed ${context.bindings.name} by waiting ${delay} ms`);
};

export default activityFunction;
