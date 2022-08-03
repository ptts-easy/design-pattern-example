console.log("======= start all-test =======");

import factory_self_test from "./@design-patterns/factory/self-test.js";

factory_self_test();

import singleton_self_test from "./@design-patterns/singleton/self-test.js";

singleton_self_test();

import collection_self_test from "./@design-patterns/collection/self-test.js";

collection_self_test();

import service_locator_self_test from "./@design-patterns/service-locator/self-test.js";

service_locator_self_test();

import iterator_self_test from "./@design-patterns/iterator/self-test.js";

iterator_self_test();

import chain_self_test from "./@design-patterns/chain/self-test.js";

chain_self_test();

console.log("======= end all-test =======");