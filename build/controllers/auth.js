"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
// this needs to just...exist?
require("../strategies/discord");
const router = express_1.default.Router();
const _pass = passport_1.default.authenticate("discord", { session: false });
router.get("/discord", _pass);
router.get("/discord/callback", _pass, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Authorize success
    try {
        return res.status(200).json({
            ok: true,
            status: 200,
            data: req.user
        });
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
//# sourceMappingURL=auth.js.map