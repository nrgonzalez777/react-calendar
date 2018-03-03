import { Entities } from '../entities/state';
import { Strings } from '../strings/state';

export interface AppState {
  entities: Entities;
  strings: Strings;
}
