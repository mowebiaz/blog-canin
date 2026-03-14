import * as migration_20260312_162146 from './20260312_162146';
import * as migration_20260314_123411 from './20260314_123411';

export const migrations = [
  {
    up: migration_20260312_162146.up,
    down: migration_20260312_162146.down,
    name: '20260312_162146',
  },
  {
    up: migration_20260314_123411.up,
    down: migration_20260314_123411.down,
    name: '20260314_123411'
  },
];
