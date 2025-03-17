import { createAction, props } from "@ngrx/store";

export const langAction=createAction("changeLang",props<{lang:string}>())