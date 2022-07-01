import { Path, path, pipe, xor } from "ramda";
import { theme } from "../globals";
import { hsl, rem } from "./helpers";

export const themeAccessor =
    (keys: Path) =>
    (props: any): any =>
        path(["theme", ...keys], props);

export const size = (keys: string[] = []) => themeAccessor(["size", ...keys]);
type widthKeys = keyof typeof theme.size.width;
export const width = (key: widthKeys) => size(["width", key]);
export const height = (key: string) => size(["height", key]);

type colorKeys = keyof typeof theme.colors;
export const color = (key: colorKeys, aplha?: number) =>
    pipe(themeAccessor(["colors", key]), (color) => hsl(color, aplha ?? 1));

type spaceKeys = keyof typeof theme.space;
export const space = (key: spaceKeys, multiplier?: number) =>
    pipe(themeAccessor(["space", key]), (x) => x * (multiplier ?? 1), rem);

type fontSizeKeys = keyof typeof theme.font.size;
type fontWeightKeys = keyof typeof theme.font.weight;
type fontFamilyKeys = keyof typeof theme.font.family;
export const font = (keys: string[] = []) => themeAccessor(["font", ...keys]);
export const fontSize = (key: fontSizeKeys) => pipe(font(["size", key]), rem);
export const fontWeight = (key: fontWeightKeys) => font(["weight", key]);
export const fontFamily = (key: fontFamilyKeys) => font(["family", key]);
