# repro-java-cpp-error

## How to reproduce

1. cd TurboModuleTest_0_70
2. yarn android

Current-Unexpected: The app will crash on CPP error.
Expected: The app will crash on Java Exception.

1. cd TurboModuleTest_0_71
2. yarn android

Expected: The app will crash on Java Exception.
Suspicious: The stack trace looks exactly the same as on legacy architecture.
