"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDealerShipDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dealer_ship_dto_1 = require("./create-dealer-ship.dto");
class UpdateDealerShipDto extends (0, mapped_types_1.PartialType)(create_dealer_ship_dto_1.CreateDealerShipDto) {
}
exports.UpdateDealerShipDto = UpdateDealerShipDto;
//# sourceMappingURL=update-dealer-ship.dto.js.map