"use strict";
exports.__esModule = true;
var Factory = require("factory.ts");
var timeStamps = Factory.Sync.makeFactory({
    createdAt: Factory.Sync.each(function () { return new Date(); }),
    updatedAt: Factory.Sync.each(function () { return new Date(); })
});
var softDelete = Factory.Sync.makeFactory({
    isDeleted: false
});
exports.postFactory = Factory.Sync.makeFactory({
    content: 'lorem ipsum'
})
    .combine(timeStamps)
    .combine(softDelete);
var viewType = timeStamps.combine(softDelete);
