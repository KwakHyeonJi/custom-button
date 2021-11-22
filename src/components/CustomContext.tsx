import React, { useReducer, createContext, useContext, useState, Dispatch } from 'react';

export interface Custom {
  id: number;
  name: string;
  colorSetting: { background: string; transparent: boolean; border: string; text: string };
  sizeSetting: { width: string; height: string; text: string };
  shapeSetting: { borderWidth: string; borderStyle: string; borderRadius: string };
  textSetting: string;
}

const initialSetting = {
  colorSetting: { background: '#5844cf', transparent: false, border: '', text: '#fff' },
  sizeSetting: { width: '200', height: '50', text: '16' },
  shapeSetting: { borderWidth: '3', borderStyle: 'Solid', borderRadius: '0' },
  textSetting: 'button',
};

type Action =
  | { type: 'CREATE'; id: number; name: string }
  | { type: 'DELETE'; id: number }
  | { type: 'CHANGE_COLOR_BACKGROUND'; id: number; color: string }
  | { type: 'CHANGE_COLOR_TRANSPARENT'; id: number }
  | { type: 'CHANGE_COLOR_BORDER'; id: number; color: string }
  | { type: 'CHANGE_COLOR_TEXT'; id: number; color: string }
  | { type: 'CHANGE_SIZE_WIDTH'; id: number; size: string }
  | { type: 'CHANGE_SIZE_HEIGHT'; id: number; size: string }
  | { type: 'CHANGE_SIZE_TEXT'; id: number; size: string }
  | { type: 'CHANGE_SHAPE_BORDER_WIDTH'; id: number; size: string }
  | { type: 'CHANGE_SHAPE_BORDER_STYLE'; id: number; style: string }
  | { type: 'CHANGE_SHAPE_BORDER_RADIUS'; id: number; size: string }
  | { type: 'CHANGE_TEXT'; id: number; text: string };

const reducer = (state: Custom[], action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return [
        {
          id: action.id,
          name: action.name,
          colorSetting: initialSetting.colorSetting,
          sizeSetting: initialSetting.sizeSetting,
          shapeSetting: initialSetting.shapeSetting,
          textSetting: initialSetting.textSetting,
        },
        ...state,
      ];
    case 'DELETE':
      return state.filter((custom) => custom.id !== action.id);
    case 'CHANGE_COLOR_BACKGROUND':
      return state.map((custom) =>
        custom.id === action.id
          ? { ...custom, colorSetting: { ...custom.colorSetting, background: action.color } }
          : custom,
      );
    case 'CHANGE_COLOR_TRANSPARENT':
      return state.map((custom) =>
        custom.id === action.id
          ? { ...custom, colorSetting: { ...custom.colorSetting, transparent: !custom.colorSetting.transparent } }
          : custom,
      );
    case 'CHANGE_COLOR_BORDER':
      return state.map((custom) =>
        custom.id === action.id
          ? { ...custom, colorSetting: { ...custom.colorSetting, border: action.color } }
          : custom,
      );
    case 'CHANGE_COLOR_TEXT':
      return state.map((custom) =>
        custom.id === action.id ? { ...custom, colorSetting: { ...custom.colorSetting, text: action.color } } : custom,
      );
    case 'CHANGE_SIZE_WIDTH':
      return state.map((custom) =>
        custom.id === action.id ? { ...custom, sizeSetting: { ...custom.sizeSetting, width: action.size } } : custom,
      );
    case 'CHANGE_SIZE_HEIGHT':
      return state.map((custom) =>
        custom.id === action.id ? { ...custom, sizeSetting: { ...custom.sizeSetting, height: action.size } } : custom,
      );
    case 'CHANGE_SIZE_TEXT':
      return state.map((custom) =>
        custom.id === action.id ? { ...custom, sizeSetting: { ...custom.sizeSetting, text: action.size } } : custom,
      );
    case 'CHANGE_SHAPE_BORDER_WIDTH':
      return state.map((custom) =>
        custom.id === action.id
          ? { ...custom, shapeSetting: { ...custom.shapeSetting, borderWidth: action.size } }
          : custom,
      );
    case 'CHANGE_SHAPE_BORDER_STYLE':
      return state.map((custom) =>
        custom.id === action.id
          ? { ...custom, shapeSetting: { ...custom.shapeSetting, borderStyle: action.style } }
          : custom,
      );
    case 'CHANGE_SHAPE_BORDER_RADIUS':
      return state.map((custom) =>
        custom.id === action.id
          ? { ...custom, shapeSetting: { ...custom.shapeSetting, borderRadius: action.size } }
          : custom,
      );
    case 'CHANGE_TEXT':
      return state.map((custom) => (custom.id === action.id ? { ...custom, textSetting: action.text } : custom));
    default:
      throw new Error('Unhandled action');
  }
};

const CustomStateContext = createContext<Custom[] | null>(null);
const CustomDispatchContext = createContext<Dispatch<Action> | null>(null);
const CustomCurrentIdContext = createContext<number | null>(null);
const CustomSetCurrentIdContext = createContext<React.Dispatch<React.SetStateAction<number>>>(null);

const CustomProvider = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  const [currentId, setCurrentId] = useState(1);
  const [state, dispatch] = useReducer(reducer, [
    {
      id: 1,
      name: 'Button',
      colorSetting: initialSetting.colorSetting,
      sizeSetting: initialSetting.sizeSetting,
      shapeSetting: initialSetting.shapeSetting,
      textSetting: initialSetting.textSetting,
    },
  ]);

  return (
    <CustomStateContext.Provider value={state}>
      <CustomDispatchContext.Provider value={dispatch}>
        <CustomCurrentIdContext.Provider value={currentId}>
          <CustomSetCurrentIdContext.Provider value={setCurrentId}>{children}</CustomSetCurrentIdContext.Provider>
        </CustomCurrentIdContext.Provider>
      </CustomDispatchContext.Provider>
    </CustomStateContext.Provider>
  );
};

const useCustomState = () => {
  const state = useContext(CustomStateContext);
  if (!state) throw new Error('Cannot find CustomProvider');
  return state;
};

const useCustomDispatch = () => {
  const dispatch = useContext(CustomDispatchContext);
  if (!dispatch) throw new Error('Cannot find CustomProvider');
  return dispatch;
};

const useCustomCurrentId = () => {
  const currentId = useContext(CustomCurrentIdContext);
  if (!currentId) throw new Error('Cannot find CustomProvider');
  return currentId;
};
const useCustomSetCurrentId = () => {
  const setCurrentId = useContext(CustomSetCurrentIdContext);
  if (!setCurrentId) throw new Error('Cannot find CustomProvider');
  return setCurrentId;
};

export { CustomProvider, useCustomState, useCustomDispatch, useCustomCurrentId, useCustomSetCurrentId };
