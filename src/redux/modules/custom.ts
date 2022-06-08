export type BorderStyle = 'Solid' | 'Dotted' | 'Dashed' | 'Double' | 'Groove' | 'Ridge' | 'Inset' | 'Outset';

// Action type
const CREATE = 'custom/CREATE' as const;
const REMOVE = 'custom/DELETE' as const;
const SELECT = 'custom/SELECT' as const;

const CHANGE_COLOR_BACKGROUND = 'custom/CHANGE_COLOR_BACKGROUND' as const;
const CHANGE_COLOR_TRANSPARENT = 'custom/CHANGE_COLOR_TRANSPARENT' as const;
const CHANGE_COLOR_BORDER = 'custom/CHANGE_COLOR_BORDER' as const;
const CHANGE_COLOR_TEXT = 'custom/CHANGE_COLOR_TEXT' as const;

const CHANGE_SIZE_WIDTH = 'custom/CHANGE_SIZE_WIDTH' as const;
const CHANGE_SIZE_HEIGHT = 'custom/CHANGE_SIZE_HEIGHT' as const;
const CHANGE_SIZE_TEXT = 'custom/CHANGE_SIZE_TEXT' as const;

const CHANGE_SHAPE_BORDER_WIDTH = 'custom/CHANGE_SHAPE_BORDER_WIDTH' as const;
const CHANGE_SHAPE_BORDER_STYLE = 'custom/CHANGE_SHAPE_BORDER_STYLE' as const;
const CHANGE_SHAPE_BORDER_RADIUS = 'custom/CHANGE_SHAPE_BORDER_RADIUS' as const;

const CHANGE_TEXT = 'custom/CHANGE_TEXT' as const;

// Action creator
export const create = (name: string) => ({ type: CREATE, payload: name });
export const remove = (id: number) => ({ type: REMOVE, payload: id });
export const select = (id: number) => ({ type: SELECT, payload: id });

export const changeColorBackground = (id: number, color: string) => ({
  type: CHANGE_COLOR_BACKGROUND,
  payload: { id, color },
});
export const changeColorTransparent = (id: number) => ({ type: CHANGE_COLOR_TRANSPARENT, payload: id });
export const changeColorBorder = (id: number, color: string) => ({
  type: CHANGE_COLOR_BORDER,
  payload: { id, color },
});
export const changeColorText = (id: number, color: string) => ({
  type: CHANGE_COLOR_TEXT,
  payload: { id, color },
});

export const changeSizeWidth = (id: number, size: string) => ({
  type: CHANGE_SIZE_WIDTH,
  payload: { id, size },
});
export const changeSizeHeight = (id: number, size: string) => ({
  type: CHANGE_SIZE_HEIGHT,
  payload: { id, size },
});
export const changeSizeText = (id: number, size: string) => ({ type: CHANGE_SIZE_TEXT, payload: { id, size } });

export const changeShapeBorderWidth = (id: number, size: string) => ({
  type: CHANGE_SHAPE_BORDER_WIDTH,
  payload: { id, size },
});
export const changeShapeBorderStyle = (id: number, style: BorderStyle) => ({
  type: CHANGE_SHAPE_BORDER_STYLE,
  payload: { id, style },
});
export const changeShapeBorderRadius = (id: number, size: string) => ({
  type: CHANGE_SHAPE_BORDER_RADIUS,
  payload: { id, size },
});

export const changeText = (id: number, text: string) => ({ type: CHANGE_TEXT, payload: { id, text } });

type Action =
  | ReturnType<typeof create>
  | ReturnType<typeof remove>
  | ReturnType<typeof select>
  | ReturnType<typeof changeColorBackground>
  | ReturnType<typeof changeColorTransparent>
  | ReturnType<typeof changeColorBorder>
  | ReturnType<typeof changeColorText>
  | ReturnType<typeof changeSizeWidth>
  | ReturnType<typeof changeSizeHeight>
  | ReturnType<typeof changeSizeText>
  | ReturnType<typeof changeShapeBorderWidth>
  | ReturnType<typeof changeShapeBorderStyle>
  | ReturnType<typeof changeShapeBorderRadius>
  | ReturnType<typeof changeText>;

// State type
export interface Custom {
  id: number;
  name: string;
  show: boolean;
  colorBackground: string;
  colorTransparent: boolean;
  colorBorder: string;
  colorText: string;
  sizeWidth: string;
  sizeHeight: string;
  sizeText: string;
  shapeBorderWidth: string;
  shapeBorderStyle: BorderStyle;
  shapeBorderRadius: string;
  text: string;
}

type State = Custom[];

// Initial state
const initialState: State = [
  {
    id: 1,
    name: 'Button',
    show: true,
    colorBackground: '#5844cf',
    colorTransparent: false,
    colorBorder: '',
    colorText: '#fff',
    sizeWidth: '200',
    sizeHeight: '50',
    sizeText: '16',
    shapeBorderWidth: '3',
    shapeBorderStyle: 'Solid',
    shapeBorderRadius: '0',
    text: 'Button',
  },
];

// Reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case CREATE:
      return [
        {
          ...initialState[0],
          id: state.reduce((maxId, custom) => Math.max(custom.id, maxId), 0) + 1,
          name: action.payload,
        },
        ...state.map((custom) => ({ ...custom, show: false })),
      ];
    case REMOVE:
      return state.filter((custom) => custom.id !== action.payload);
    case SELECT:
      return state.map((custom) =>
        custom.id === action.payload ? { ...custom, show: true } : { ...custom, show: false },
      );
    case CHANGE_COLOR_BACKGROUND:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, colorBackground: action.payload.color } : custom,
      );
    case CHANGE_COLOR_TRANSPARENT:
      return state.map((custom) =>
        custom.id === action.payload ? { ...custom, colorTransparent: !custom.colorTransparent } : custom,
      );
    case CHANGE_COLOR_BORDER:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, colorBorder: action.payload.color } : custom,
      );
    case CHANGE_COLOR_TEXT:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, colorText: action.payload.color } : custom,
      );
    case CHANGE_SIZE_WIDTH:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, sizeWidth: action.payload.size } : custom,
      );
    case CHANGE_SIZE_HEIGHT:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, sizeHeight: action.payload.size } : custom,
      );
    case CHANGE_SIZE_TEXT:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, sizeText: action.payload.size } : custom,
      );
    case CHANGE_SHAPE_BORDER_WIDTH:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, shapeBorderWidth: action.payload.size } : custom,
      );
    case CHANGE_SHAPE_BORDER_STYLE:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, shapeBorderStyle: action.payload.style } : custom,
      );
    case CHANGE_SHAPE_BORDER_RADIUS:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, shapeBorderRadius: action.payload.size } : custom,
      );
    case CHANGE_TEXT:
      return state.map((custom) =>
        custom.id === action.payload.id ? { ...custom, text: action.payload.text } : custom,
      );
    default:
      return state;
  }
};

export default reducer;
