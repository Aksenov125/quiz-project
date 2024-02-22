import type { Question, Theme } from "../type";

export type ActionTheme = 
    {type: 'Theme/Init'; payload:Question[]}
 |   {type: 'Question/Init'; payload:Question[]}

