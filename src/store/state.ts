import { Components } from '../components/state';
import { Entities } from '../entities/state';
import { Strings } from '../strings/state';

export interface AppState {
  components: Components;
  entities: Entities;
  strings: Strings;
}
