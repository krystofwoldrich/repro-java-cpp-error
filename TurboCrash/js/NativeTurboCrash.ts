import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  crash(): void;
}

export default TurboModuleRegistry.get<Spec>(
  'TurboCrash',
) as Spec | null;
