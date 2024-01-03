import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./BitAndRock.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1621842806112},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1622888379206},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1622888379212},"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703943891828},"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703947383793},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703947383793},"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703947894763},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["main"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703947894763},"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703948115016},"e-12":{"id":"e-12","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703948115016},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703948183985},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703948183985},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"ffadaca0-88f7-918c-3a75-2b2908be2c8c"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1704216343322}},"actionLists":{"a":{"id":"a","title":"intro-click","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c9e"},"widthValue":1,"heightValue":1.5,"widthUnit":"px","heightUnit":"em","locked":false}},{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|186c4880-78f8-d8a2-8089-aba8ce9d96fe"},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|475b1fc7-c904-8333-6cac-ef7b5fe4bae5"},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|c6c8530b-326c-4d39-26e6-6ebdcebb602a"},"value":0,"unit":""}},{"id":"a-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|c6c8530b-326c-4d39-26e6-6ebdcebb602a"},"xValue":80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":40,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":1,"heightValue":0,"widthUnit":"px","heightUnit":"em","locked":false}},{"id":"a-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"dca45cfa-c74a-56ec-19fd-77a94548560e"},"xValue":150,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"dca45cfa-c74a-56ec-19fd-77a945485611"},"xValue":-150,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|ce88cfb8-5060-c54d-b472-8e064bad7c5b"},"value":0,"unit":""}},{"id":"a-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|ce88cfb8-5060-c54d-b472-8e064bad7c5b"},"xValue":80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|f74b3709-40a4-357f-3d3b-d220c03a089a"},"value":0,"unit":""}},{"id":"a-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|f74b3709-40a4-357f-3d3b-d220c03a089a"},"xValue":80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|95b37ca5-cf20-0642-c64f-aeceea91655f"},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"id":"659017a464761a9cccff3267|08ac336c-8321-8ead-7a16-c420a64b4c97"},"xValue":110,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-22","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c9e"},"widthValue":1,"heightValue":0,"widthUnit":"px","heightUnit":"em","locked":false}},{"id":"a-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"id":"659017a464761a9cccff3267|08ac336c-8321-8ead-7a16-c420a64b4c9a"},"xValue":-110,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"outQuart","duration":800,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94"},"yValue":8,"xUnit":"PX","yUnit":"em","zUnit":"PX"}},{"id":"a-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94"},"value":0,"unit":""}},{"id":"a-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"inOutQuart","duration":1000,"target":{"useEventTarget":"SIBLINGS","id":"ffadaca0-88f7-918c-3a75-2b2908be2cb3"},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"inOutQuart","duration":1000,"target":{"useEventTarget":"SIBLINGS","id":"ffadaca0-88f7-918c-3a75-2b2908be2cb2"},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-28","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":"inOutQuart","duration":1000,"target":{"id":"dca45cfa-c74a-56ec-19fd-77a945485611"},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":"inOutQuart","duration":1000,"target":{"id":"dca45cfa-c74a-56ec-19fd-77a94548560e"},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-30","actionTypeId":"STYLE_SIZE","config":{"delay":1200,"easing":"ease","duration":500,"target":{},"widthValue":1,"heightValue":1.5,"widthUnit":"px","heightUnit":"em","locked":false}},{"id":"a-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":1800,"easing":"ease","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":1800,"easing":"ease","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|c6c8530b-326c-4d39-26e6-6ebdcebb602a"},"value":1,"unit":""}},{"id":"a-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1800,"easing":"outQuart","duration":1500,"target":{"id":"64eb35d7d8971a5cdad98d1f|c6c8530b-326c-4d39-26e6-6ebdcebb602a"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-34","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1800,"easing":"outQuart","duration":1500,"target":{},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-35","actionTypeId":"STYLE_SIZE","config":{"delay":1800,"easing":"inOutQuart","duration":3000,"target":{"id":"64eb35d7d8971a5cdad98d1f|186c4880-78f8-d8a2-8089-aba8ce9d96fe"},"widthValue":0,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-n-36","actionTypeId":"STYLE_OPACITY","config":{"delay":2000,"easing":"ease","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|ce88cfb8-5060-c54d-b472-8e064bad7c5b"},"value":1,"unit":""}},{"id":"a-n-37","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2000,"easing":"outQuart","duration":1500,"target":{"id":"64eb35d7d8971a5cdad98d1f|ce88cfb8-5060-c54d-b472-8e064bad7c5b"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-38","actionTypeId":"STYLE_OPACITY","config":{"delay":2200,"easing":"ease","duration":500,"target":{"id":"64eb35d7d8971a5cdad98d1f|f74b3709-40a4-357f-3d3b-d220c03a089a"},"value":1,"unit":""}},{"id":"a-n-39","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2200,"easing":"outQuart","duration":1500,"target":{"id":"64eb35d7d8971a5cdad98d1f|f74b3709-40a4-357f-3d3b-d220c03a089a"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-40","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2400,"easing":"outQuart","duration":2000,"target":{},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-41","actionTypeId":"STYLE_OPACITY","config":{"delay":2400,"easing":"ease","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-n-42","actionTypeId":"TRANSFORM_MOVE","config":{"delay":2600,"easing":"outQuart","duration":2000,"target":{},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-43","actionTypeId":"STYLE_OPACITY","config":{"delay":2600,"easing":"ease","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-n-44","actionTypeId":"TRANSFORM_MOVE","config":{"delay":3000,"easing":"outQuart","duration":1000,"target":{"id":"64eb35d7d8971a5cdad98d1f|475b1fc7-c904-8333-6cac-ef7b5fe4bae5"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-45","actionTypeId":"TRANSFORM_MOVE","config":{"delay":3200,"easing":"outQuart","duration":1000,"target":{"id":"64eb35d7d8971a5cdad98d1f|95b37ca5-cf20-0642-c64f-aeceea91655f"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-46","actionTypeId":"STYLE_OPACITY","config":{"delay":3200,"easing":"ease","duration":500,"target":{},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-n-47","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".intro-parent","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951ae"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1621680136598},"a-2":{"id":"a-2","title":"primary-btn-hover","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card-whipe","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b7"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-sm-ap","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b6"]},"yValue":2.5,"xUnit":"PX","yUnit":"em","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-sm","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b4"]},"yValue":0,"xUnit":"PX","yUnit":"em","zUnit":"PX"}}]},{"actionItems":[{"id":"a-2-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".card-whipe","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b7"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-sm-ap","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b6"]},"yValue":0,"xUnit":"PX","yUnit":"em","zUnit":"PX"}},{"id":"a-2-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-sm","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b4"]},"yValue":-2.5,"xUnit":"PX","yUnit":"em","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1621842475867},"a-3":{"id":"a-3","title":"primary-btn-hover 2","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".card-whipe","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b7"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-sm-ap","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b6"]},"yValue":2.5,"xUnit":"PX","yUnit":"em","zUnit":"PX"}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-sm","selectorGuids":["4339c0db-7af9-23b7-cde3-7db8acb951b4"]},"yValue":0,"xUnit":"PX","yUnit":"em","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1621842475867},"a-4":{"id":"a-4","title":"intro-load","actionItemGroups":[{"actionItems":[{"id":"a-4-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94"},"yValue":9,"xUnit":"PX","yUnit":"em","zUnit":"PX"}},{"id":"a-4-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c8d"},"value":0,"unit":""}},{"id":"a-4-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90"},"value":0,"unit":""}},{"id":"a-4-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c81aa2ca-06ea-a40e-5f89-603f23e23497"},"value":0,"unit":""}},{"id":"a-4-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"8f5c6f8d-f5c5-ac91-fa6c-4e7f00356963"},"value":0,"unit":""}},{"id":"a-4-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"dfe2e291-e51b-56f1-057e-b84a8f379597"},"value":0,"unit":""}},{"id":"a-4-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"96cee3b0-7781-63a9-4878-a9d6a83ca486"},"value":0,"unit":""}},{"id":"a-4-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"611de2ce-cc34-2431-ffec-c7aa6f21db23"},"value":0,"unit":""}},{"id":"a-4-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"dbcfd6e3-89e0-af4c-88fe-5e1df56a98c7"},"value":0,"unit":""}},{"id":"a-4-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"193b43c4-ea8f-c37b-f97e-89533d9afb5a"},"value":0,"unit":""}},{"id":"a-4-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"0142c411-27db-ef56-f018-04e0a0784d95"},"value":0,"unit":""}},{"id":"a-4-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"eb738b30-6062-db3a-bae6-bc1196c25ddd"},"value":0,"unit":""}},{"id":"a-4-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"0865cb2f-9a21-46ac-a8de-9e29ddb0f589"},"value":0,"unit":""}},{"id":"a-4-n-36","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca4"},"xValue":0,"zValue":-90,"xUnit":"deg","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-40","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca6"},"value":0,"unit":""}},{"id":"a-4-n-41","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.one","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","dfe5e1fc-651b-0961-d29b-e637d8598dd2"]},"value":0,"unit":""}},{"id":"a-4-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca4"},"value":0,"unit":""}},{"id":"a-4-n-45","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92"},"value":0,"unit":""}},{"id":"a-4-n-51","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.two","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","5873725b-e298-8c58-9918-06db43e06da5"]},"value":0,"unit":""}},{"id":"a-4-n-52","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.three","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","771574e2-87fb-88c7-3461-37427e3c74c1"]},"value":0,"unit":""}},{"id":"a-4-n-53","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.four","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","3dcb1841-be20-b0da-89fa-626f4ec06e72"]},"value":0,"unit":""}},{"id":"a-4-n-54","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.five","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","8f094daa-7833-354e-f98b-ba53149517dc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"c81aa2ca-06ea-a40e-5f89-603f23e23497"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"8f5c6f8d-f5c5-ac91-fa6c-4e7f00356963"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"dfe2e291-e51b-56f1-057e-b84a8f379597"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"96cee3b0-7781-63a9-4878-a9d6a83ca486"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-30","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"611de2ce-cc34-2431-ffec-c7aa6f21db23"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"dbcfd6e3-89e0-af4c-88fe-5e1df56a98c7"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"193b43c4-ea8f-c37b-f97e-89533d9afb5a"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-33","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"0142c411-27db-ef56-f018-04e0a0784d95"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-34","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"eb738b30-6062-db3a-bae6-bc1196c25ddd"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-35","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":400,"target":{"id":"0865cb2f-9a21-46ac-a8de-9e29ddb0f589"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-42","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca4"},"value":1,"unit":""}},{"id":"a-4-n-43","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca6"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"","duration":1000,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c94"},"yValue":0,"xUnit":"PX","yUnit":"em","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":800,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c8d"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":800,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-46","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-39","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ffadaca0-88f7-918c-3a75-2b2908be2ca4"},"xValue":0,"zValue":0,"xUnit":"deg","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-4-n-44","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.one","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","dfe5e1fc-651b-0961-d29b-e637d8598dd2"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-47","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.two","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","5873725b-e298-8c58-9918-06db43e06da5"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-48","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.three","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","771574e2-87fb-88c7-3461-37427e3c74c1"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-49","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.four","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","3dcb1841-be20-b0da-89fa-626f4ec06e72"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-50","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sub-title.five","selectorGuids":["c92a2b13-64b5-8ee1-e1d5-a6912b173a8b","8f094daa-7833-354e-f98b-ba53149517dc"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1703943903057},"a-5":{"id":"a-5","title":"spin-animation-IN","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92"},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-5-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inCubic","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92"},"zValue":360,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1703947064315},"a-7":{"id":"a-7","title":"spin-animation-OUT","actionItemGroups":[{"actionItems":[{"id":"a-7-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-7-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inCubic","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c92"},"zValue":-360,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1703947064315},"a-8":{"id":"a-8","title":"hand-color-IN","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90"},"yValue":-10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-3","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90"},"filters":[{"type":"invert","filterId":"a552","value":100,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":true,"createdOn":1703947901241},"a-9":{"id":"a-9","title":"hand-color-OUT","actionItemGroups":[{"actionItems":[{"id":"a-9-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-9-n-3","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffadaca0-88f7-918c-3a75-2b2908be2c90"},"filters":[{"type":"invert","filterId":"bd3d","value":0,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1703947901241},"a-10":{"id":"a-10","title":"bounce-IN","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".icon-box","selectorGuids":["a0afc6bd-83e2-f541-f82b-a358b893df42"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".icon-box","selectorGuids":["a0afc6bd-83e2-f541-f82b-a358b893df42"]},"xValue":0,"yValue":-5,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-10-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".icon-box","selectorGuids":["a0afc6bd-83e2-f541-f82b-a358b893df42"]},"xValue":0,"yValue":5,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1703948189008},"a-11":{"id":"a-11","title":"bounce-OUT","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".icon-box","selectorGuids":["a0afc6bd-83e2-f541-f82b-a358b893df42"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1703948189008}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BitAndRock({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "intro-parent")}
      data-w-id="ffadaca0-88f7-918c-3a75-2b2908be2c8c"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "top-left")}
        data-w-id="ffadaca0-88f7-918c-3a75-2b2908be2c8d"
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h2">
          {"<b/r>"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "top-right")}
        data-w-id="ffadaca0-88f7-918c-3a75-2b2908be2c90"
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/659017a464761a9cccff3260/65902a383fcec21648c6efff_Group%201.svg"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "stamp")}
        data-w-id="ffadaca0-88f7-918c-3a75-2b2908be2c92"
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-2")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/659017a464761a9cccff3260/6590231b9ac6b115582bd2c9_Frame%205.png"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "logo-parent", "push")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-hide", "pad-right")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "main-header")}
            tag="h1"
          >
            <_Builtin.Span
              className={_utils.cx(_styles, "span-1")}
              data-w-id="c81aa2ca-06ea-a40e-5f89-603f23e23497"
            >
              {"b"}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-2")}
              data-w-id="8f5c6f8d-f5c5-ac91-fa6c-4e7f00356963"
            >
              {"i"}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-3")}
              data-w-id="dfe2e291-e51b-56f1-057e-b84a8f379597"
            >
              {"t"}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-4")}
              data-w-id="96cee3b0-7781-63a9-4878-a9d6a83ca486"
            >
              {" "}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-5")}
              data-w-id="611de2ce-cc34-2431-ffec-c7aa6f21db23"
            >
              {"n"}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-6")}
              data-w-id="dbcfd6e3-89e0-af4c-88fe-5e1df56a98c7"
            >
              {"'"}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-7")}
              data-w-id="193b43c4-ea8f-c37b-f97e-89533d9afb5a"
            >
              {"r"}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-8")}
              data-w-id="0142c411-27db-ef56-f018-04e0a0784d95"
            >
              {"o"}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-9")}
              data-w-id="eb738b30-6062-db3a-bae6-bc1196c25ddd"
            >
              {"c"}
            </_Builtin.Span>
            <_Builtin.Span
              className={_utils.cx(_styles, "span-10")}
              data-w-id="0865cb2f-9a21-46ac-a8de-9e29ddb0f589"
            >
              {"k"}
            </_Builtin.Span>
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "description-box")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "icon-box")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "image")}
            data-w-id="ffadaca0-88f7-918c-3a75-2b2908be2ca4"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/659017a464761a9cccff3260/6590271988515e0f9fbca275_Polygon%206.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "title")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "h4-green")}
            data-w-id="ffadaca0-88f7-918c-3a75-2b2908be2ca6"
            tag="h4"
          >
            {"<rompiendo-códigos>"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "sub-title", "one")}
            tag="h6"
          >
            {"<innovation-made-possible>"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "sub-title", "two")}
            tag="h6"
          >
            {"<collaborative-vibes>"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "sub-title", "three")}
            tag="h6"
          >
            {"<making-brands-make-impact>"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "sub-title", "four")}
            tag="h6"
          >
            {"<irreverent-approach>"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "sub-title", "five")}
            tag="h6"
          >
            {"<digital-transgression>"}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "btn-parent", "ab-btm", "bg-yellow")}
        data-w-id="ffadaca0-88f7-918c-3a75-2b2908be2c94"
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "btn-txt-sm")} tag="div">
          {"<rockin´-it-soon>"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "btn-txt-sm-ap")}
          tag="div"
        >
          {"<rockin´-it-soon>"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card-whipe", "bg-yellow-shade")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
