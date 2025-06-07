import { Companion } from '../../companion/models/companion.model';

export interface FellowshipMemberStatus {
  companion: Companion | undefined;
  status: 'alive' | 'dead' | 'unknown';
}
