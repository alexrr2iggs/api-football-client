/// <reference types="node" />
import { SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse } from './types';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
export declare const players: (search: SearchPlayersStatisticsByFixtureId, xRapidApiKey: string) => Promise<[import("../../../common/types").ApiFootballResponse<SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=players.d.ts.map