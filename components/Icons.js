import * as React from "react";
import Svg, { Path, G, Rect } from "react-native-svg";
import styled from "styled-components/native";
import { colors } from "../colors";
// import { IconData } from "./Home/SampleData";
export const RightArrowIcon = ({ color }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 38"
        d="M9.705 6l-1.41 1.41 4.58 4.59-4.58 4.59L9.705 18l6-6z"
        fill={color ? `${color}` : "#1c1e22"}
      />
    </Svg>
  );
};
export const LeftGrayArrowIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 390"
        d="M19.67 5.77L17.89 4 8 13.9l9.9 9.9 1.77-1.77-8.13-8.13z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const RightGrayArrowIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 389"
        d="M8 22.13l1.77 1.77 9.9-9.9-9.9-9.9L8 5.87 16.13 14z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const ReloadIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 388"
        d="M20.345 7.64a9 9 0 102.34 8.61h-2.34a6.792 6.792 0 11-1.609-7l-3.622 3.63h7.875V5z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const AlarmIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 77"
        d="M12 22a2.006 2.006 0 002-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const SearchIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 76"
        d="M15.5 14h-.79l-.28-.27a6.51 6.51 0 10-.7.7l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1114 9.5 4.494 4.494 0 019.5 14z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const CancelIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 75"
        d="M12 2a10 10 0 1010 10A9.991 9.991 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const QuestionIcon = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 16h2v-2H9v2zm1-16C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14C7.79 4 6 5.79 6 8h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
        fill="#7F8B9D"
      />
    </Svg>
  );
};

export const AllIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 54"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 90"
        d="M6 10h4V6H6zm6 12h4v-4h-4zm-2 0H6v-4h4zm-4-6h4v-4H6zm10 0h-4v-4h4zm2-10v4h4V6zm-2 4h-4V6h4zm2 6h4v-4h-4zm4 6h-4v-4h4z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};
export const FashionIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <G data-name="\uADF8\uB8F9 54">
        <Path
          data-name="\uC0AC\uAC01\uD615 53"
          fill="none"
          opacity={0.01}
          d="M0 0h28v28H0z"
        />
        <Path
          data-name="\uD328\uC2A4 89"
          d="M7.09 14.56a75.2 75.2 0 01.072 7.91H5.18v-9.88l.9-3.4q.609 2.664 1.01 5.37zm-.292-7.553l2.838-1.9-.8 2.96 3.014 2.328-1.174 1.942v11.71h-2.36a93.54 93.54 0 000-9.62q-.574-3.744-1.516-7.42zm6.833.45l-1.151 1.9-2.27-1.751.906-3.381zM12.42 3.95l1.875 2.407L15.75 3.95h-3.33zm.474 7.051l3.883-6.426.833 4.015zM11.88 24.05V12.871l7.09-3.641-.9-4.318 3.079 2.059a16.252 16.252 0 00-1.357 5.766v.013c-.02.47-.05.99-.13 1.68a93.54 93.54 0 000 9.62h-7.78zm9.13-11.19a12.522 12.522 0 01.809-4.048l1 3.778v9.88h-2.014a74.69 74.69 0 01.074-7.86 16.754 16.754 0 00.131-1.75zm3.01 10.81h-3.176c.014.42.026.731.032.887v.743l-.6-.05H7.09v-.63c0-.005 0-.05.005-.13l.029-.82H3.98L4 12.35l1.58-5.98 5.43-3.62H17l5.42 3.62 1.6 6.14zm-5.31-11.16h-2.88v1h2.88z"
          fill="#1c232d"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
};
export const ChildBirthIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 69"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 105"
        d="M22.273 11.973l1.277 1.277-3.11 3.11-.98-.98-1.77 3.73-5.08 5.08H8.73l-4.92-4.92v-3.88l5.25-5.2 3.555-1.655-.975-.975 3.11-3.11 1.266 1.266A3.194 3.194 0 0117.64 5a2.43 2.43 0 011.58.42A3.161 3.161 0 0120.72 4a2.77 2.77 0 012.41.35l.12.1.36.38A2.74 2.74 0 0124 7.28a3.158 3.158 0 01-1.34 1.5 2.409 2.409 0 01.34 1.58 3.225 3.225 0 01-.727 1.613zm-.848-.848a2 2 0 00.425-.9 1.667 1.667 0 00-.6-1.23l-.68-.68.92-.32a2.337 2.337 0 001.34-1.14 1.58 1.58 0 00-.22-1.32l-.15-.15a1.537 1.537 0 00-1.32-.22A2.333 2.333 0 0020 6.515l-.32.9-.68-.67a1.649 1.649 0 00-1.25-.6 2 2 0 00-.884.416zm-11.765.1l3.858-1.792 5.044 5.044-1.792 3.858-4.66 4.65H9.22l-4.21-4.21v-2.89zm10.78 3.43l-7.1-7.1 1.41-1.41 7.1 7.1zm-7.131-2.219l-.848.848 2.248 2.249.848-.848zm-3.028 3.031l.849-.848 2.249 2.247-.848.849zM9.218 16.53l-.848.848 2.248 2.249.848-.848z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};
export const KitchenIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 64"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 100"
        d="M7.406 16.78L5.22 14.85V5.31h16.76V6.9h2.67v4.99l-2.67 1.674v1.286l-2.186 1.93h5.016l-.74 3.05-3.76 1.131v2.129H6.88v-2.138L3.13 19.83l-.74-3.05zm14.574-4.637V8.1h1.47v3.12zM13.6 21.89h5.51v-.86H13.6l-5.51-.025v.885zm4.42-5.15l.036.04H9.145l.035-.04-2.76-2.44V6.51h14.36v7.79zm1.88 3.09H7.3l-3.17-.95-.21-.9h19.36l-.21.9zM8.28 12.47l2.11 2.11.85-.84-1.76-1.76V8.14h-1.2z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};
export const HomeDecoIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 63"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 99"
        d="M10.46 7.29a2.73 2.73 0 111.813-.689l1.52 3.147 1.86-2.3a2.731 2.731 0 11.9.8l-2.352 2.913v2.1l2.35-1.63 1.811-.574a2.45 2.45 0 11.537 1.1l-1.9.6-1.19.84h3.35l-1.72 3.56a3.59 3.59 0 012.14 2.54 3.157 3.157 0 01-.7 2.56 3.239 3.239 0 01-1.88 1v.1h2.61v2.82H7.47v-2.82h2.45v-.13a3.239 3.239 0 01-1.88-1 3.157 3.157 0 01-.7-2.56 3.59 3.59 0 012.14-2.54l-1.72-3.54h4.592l-1.332-1.22-1.915-.585a2.42 2.42 0 11.525-1.505 2.387 2.387 0 01-.033.4l2.033.621L13 12.551V10.87l-1.782-3.686a2.75 2.75 0 01-.758.106zm0-4.26a.638.638 0 100-.03zM6.067 9.752a1.23 1.23 0 11.26 1.344 1.229 1.229 0 01-.26-1.344zM13.6 23.34v-.01h-2.53v-1.28h-.6a2.16 2.16 0 01-1.58-.63 2 2 0 01-.4-1.63c.15-.95 1.49-1.62 2-1.8l.64-.22-1.46-3h3.65v.01h3.95l-1.46 3 .64.22c.51.18 1.85.85 1.95 1.8a2 2 0 01-.4 1.63 2.155 2.155 0 01-1.6.63h-.6v1.28zM8.67 25h9.74v-.43H8.67zm7.789-19.732a1.531 1.531 0 11.326 1.67 1.53 1.53 0 01-.326-1.67zm4.3 4.042a1.245 1.245 0 100-.01z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const SportIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 56"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 92"
        d="M22.7 23.33h-9L5 14.44l1.65-1.79L7.83 12l8.52-8.88 5.71 5.47L18 12.52l.72 2.29 3.23.5 2.7 3.08v3.93zm-8.47-1.2h8.18l1-.54v-.881l-7.85-.009-7.459-7.487-.8.437-.67.75zm-.673-14.382L16.39 4.81l3.9 3.78-2.991 2.894zm-.834.863l-3.7 3.835 7.036 7.064h7.35v-.67l-2.11-2.41-1.136-.176.265 1.333-1.177.234-.35-1.763-1.142-.178-.423-1.341-2.3.287-.148-1.191 2.085-.259-.241-.766zm-9.7 8.429h2.75v1.2h-2.75zm4.93 2.47h-4.93v1.2h4.93zm-4.93 2.46h7.1v1.2h-7.1z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const BookIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 67"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 103"
        d="M14.63 8.8h-1.28l.019 14.28h1.261zm1.25 14.9L25 21.49V6.06l-1.83.423V3.73h-.57c-.419-.022-5.522-.287-8.494 3.871h-.238c-2.879-4.029-7.833-3.853-8.435-3.832H4.83v2.714L3 6.06v15.43l9.12 2.207v.583h3.76zm0-1.229l7.95-1.918v-13l-7.95 1.838zm0-14.3L22 6.754V4.92a9.254 9.254 0 00-6.355 2.68h.235zm-3.76 1.216v13.069l-7.9-1.906V7.57zm.235-1.787h-.235v.575L6 6.756V4.92a9.254 9.254 0 016.355 2.68zm4.425 6.64v-3.53l6-1.45v3.45zM18 11.66v1l3.65-.92v-1z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const OfficeIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uD328\uC2A4 94"
        d="M18.574 9.255a2.672 2.672 0 01-.744-.155 2.354 2.354 0 01-.6-.237l-.523-.153-1.441 2.75h3.571l.231-2.06zm1.782-.722a2.861 2.861 0 00.814-1.453 5.321 5.321 0 00-1-4.4l-.14-.16-.36-.11-.19.06a5.4 5.4 0 00-3.27 3.1 2.941 2.941 0 00-.11 1.73l-2.073 3.957L13.2 7.17l-.205.043L10.912 5.1v-.013H10.9l-.811-.824a.8.8 0 00-1.31.27l-.4 1.08H8.36l.006.03-1.024 2.75-.221.046.63 3.02H5.67v3.16h.706l2.314 10.29h10.2l2.3-10.29h.715v-3.16h-1.859l.333-2.92zM9.872 6.525l-.588.123-.54 1.454 2.847-.6-1.1-1.11zM12.26 8.6l.583 2.86h-.415l-.579-2.775zm-1.586.328l.528 2.532H8.971L8.54 9.37zm6.934-1.2l1.2.351A1.241 1.241 0 0019.17 8 1.808 1.808 0 0020 6.77a3.849 3.849 0 00-.54-2.95A3.813 3.813 0 0017.36 6a1.82 1.82 0 000 1.45 1.187 1.187 0 00.248.281zm-9.993 6.889h12.349l-1.379 6.16H8.994zm1.647 7.36l.387 1.73h8.28l.387-1.73zm4.687-8.56H6.87v-.76h13.84v.76z"
        fill="#1c232d"
        fillRule="evenodd"
      />
      <Path
        data-name="\uC0AC\uAC01\uD615 58"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
    </Svg>
  );
};

export const HealthIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 61"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 97"
        d="M11.13 6.96H7.58v.77h3.54v1.2H7.58v.04L4.81 11.3v.03h12.63v-.03l-2.77-2.33v-.04h-3.54v-1.2h3.54v-.77zm7.51 3.78v5.215l.88-.585a3.812 3.812 0 114.22 6.35l-4.28 2.83a3.751 3.751 0 01-2.09.64 4.055 4.055 0 01-.77-.08 3.8 3.8 0 01-2.649-2.01H5.17l-1.56-2.12V10.74l2.77-2.33V6.96H4.96V3.21h12.33v3.75h-1.42v1.45zm-1.2 1.79v4.223l-2.19 1.457a3.826 3.826 0 00-.59.48H4.81v-6.16h12.63zm-6.31 7.36h2.716a3.8 3.8 0 00-.27 2.01h-7.8l-.97-1.31v-.7zm4.96-14.13H6.16V4.41h9.93zm4.1 10.61a2.609 2.609 0 012.88 4.35l-1.638 1.083-2.884-4.344zm-2.642 1.753L15.91 19.21a2.62 2.62 0 00-.73 3.61 2.56 2.56 0 001.66 1.11 2.534 2.534 0 001.95-.38l1.641-1.085zM11.73 14.89h1.56v1.2h-1.56v1.56h-1.2v-1.56H8.95v-1.2h1.58v-1.58h1.2z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const BeutyIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 66"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 102"
        d="M3.324 12.853a8.61 8.61 0 008.006 7.59v2.1H8.28v1.2h7.29v-1.2h-3.04v-2.1a8.534 8.534 0 004.791-1.884l.5 2.934h-.227v3.27h5.72v-3.27h-.466l1.836-10.77v-2.16h-4.848a8.61 8.61 0 00-16.508 4.293zm18.8 9.837h-3.33v.87h3.33zm.011-4.16l1.161-6.85h-5.923l1.167 6.85zm-.2 1.2l-.3 1.76h-2.59l-.3-1.76zm-4.748-9.25h6.3v-.72h-6.3zm1.331-1.92a7.41 7.41 0 10-1.425 8.606l-1.106-6.546V8.56zm-6.681 8.72a5.44 5.44 0 01-5.43-5.43h1.2a4.24 4.24 0 004.23 4.23z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const FoodIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 60"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 96"
        d="M21.46 20.85v-3.889a12.555 12.555 0 001.67-2.14v5.219a4.188 4.188 0 01-1.67 2.722zm-.026 3.421l.026.009v-.026c.365-.245 2.87-1.989 2.87-4.254v-8.89h-.042a6.075 6.075 0 00-.028-.7 8.521 8.521 0 00-3.52-5.75l-.25-.17-5.278 1.843a3.181 3.181 0 00-5.089 1.806l-6.661 2.332v7.358l17.948 6.432.012.018.008-.005zM23.07 10.51c.185 1.947-.776 3.959-2.828 5.974l-14.985-5.37 4.849-1.7a3.18 3.18 0 105.926-2.1L20.29 5.82a7.208 7.208 0 012.78 4.69zm-9.85-3.68a.547.547 0 100-.03zM4.66 17v-2.17l15.56 5.576v2.174zm15.56.76v1.39L4.66 13.56v-1.38zM17 12.87a2 2 0 102-2 2 2 0 00-2 2zm1.19 0a.81.81 0 01.81-.81.76.76 0 01.42.12.8.8 0 01.39.69.81.81 0 11-1.62 0zm1.16-3.3a1.34 1.34 0 010-2.67 1.41 1.41 0 01.7.19 1.34 1.34 0 01-.7 2.48zm0-1.46c-.11 0-.15.06-.15.12s.27.16.27 0a.139.139 0 00-.06-.11z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const LifeIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 59"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 95"
        d="M18.5 6.2l-1.98-1.41H16v1.78h1.3v2.948l5.26 1.992v13.9H5.44V11.54l5.09-1.891V6.57h1.29v-1.8l-2-1.049.56-1.06 1.78.94h4.74l2.3 1.62zM16 7.81h-4.27v1.56h4.37V7.81zm-3-1.24V4.8h1.79v1.77zm-1.61 4h5.2l4.77 1.8v1.72H12.2v8.49h9.16v1.63H6.64v-1.63h3.23v-8.49H6.64v-1.72zm9.97 10.81H13.4v-6.09h7.96zm-14.49 0h1.8v-6.09H6.9z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const AppliancesDigitalIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uD328\uC2A4 101"
        d="M15.74 23.96h9.89V1.94H12.29v7.48H1.87v16.7h13.87zm8.69-1.2V12.24h-8.68v-1.2h8.68v-7.9H13.49v6.28h2.25v13.34zm-9.89-8.58v10.74H3.07V14.18zm0-1.2v-2.36H3.07v2.36zm-9.372 7.862a3.93 3.93 0 10.857-4.285 3.932 3.932 0 00-.857 4.285zm.9-1.492a2.73 2.73 0 015.395-.6H9.9v1.2h1.564a2.73 2.73 0 01-5.394-.6zm15.52-11.09h1.49v1.49h-1.49zm1.49 8.26h-1.49v1.49h1.49zm-19.27-5.13h.87v.87h-.87zm2.36 0h-.87v.87h.87z"
        fill="#1c232d"
        fillRule="evenodd"
      />
      <Path
        data-name="\uC0AC\uAC01\uD615 65"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
    </Svg>
  );
};

export const CarIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 68"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 104"
        d="M23.8 17.07v-2.8a2.718 2.718 0 00-.89-2.14 4.389 4.389 0 01-.3-.34H5.41a4.4 4.4 0 01-.3.34 2.721 2.721 0 00-.89 2.14v2.8h6.292l.978-3.4h5.02l.979 3.4zm-1.89-6.54l.022.06H6.088l.022-.06c.46-1.25 1.68-4.25 2.11-5.25H19.8c.43 1.03 1.65 3.97 2.11 5.25zM3 17.07v-2.8a3.871 3.871 0 011.2-2.94 3.449 3.449 0 00.8-1.2c.025-.072.052-.149.082-.23h-1.5V8.7h1.956c.7-1.8 1.681-4.128 1.734-4.25l.16-.37h13.15l.15.37c.054.122 1.032 2.451 1.744 4.25h1.946v1.2h-1.484l.084.23a3.462 3.462 0 00.8 1.2 3.841 3.841 0 011.18 2.94v2.8h.53v4.61h-2.46a2.711 2.711 0 01-2.67 2.24h-2a2.7 2.7 0 01-2.66-2.24h-3.479a2.7 2.7 0 01-2.661 2.24h-2a2.711 2.711 0 01-2.669-2.24H2.47v-4.61zm13.975 4.61a1.508 1.508 0 001.425 1.04h2a1.52 1.52 0 001.433-1.04zm-7.8-6.51v-1.2h-3.5v1.2zm7.064 1.9h-4.487l.633-2.2h3.22zm-5.218 4.61a1.511 1.511 0 01-1.426 1.04h-2a1.519 1.519 0 01-1.432-1.04zm2.854-1.2h10.45v-2.21H3.67v2.21zm4.94-6.51h3.5v1.2h-3.5z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const HobbyIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 62"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 98"
        d="M3.64 9.63H2.26V4.34H15v5.29h-1.35V12h2.04v-1.94h6.13V12h2.19v6.49h2.2v3.76h-4.638a3.732 3.732 0 01-6.824 0h-2.7a3.731 3.731 0 01-6.822 0H1.79v-3.76h1.85zm18.18 3.57h-8.17v5.29h1.535a3.724 3.724 0 012.975-1.48V17a3.736 3.736 0 012.983 1.49h1.667V13.2zm-1.2-1.2v-.74h-3.73V12zm1.27 8.74a3.732 3.732 0 00-.148-1.05h3.268v1.36h-3.133c.009-.102.013-.206.013-.31zm-8.24-1.05h.93a3.712 3.712 0 00-.15 1.05c0 .1 0 .208.013.31h-2.086c.009-.1.013-.206.013-.31a3.73 3.73 0 00-.148-1.05h1.428zM12.46 12v6.49h-.837a3.789 3.789 0 00-.338-.391 3.731 3.731 0 00-2.635-1.1v.01a3.729 3.729 0 00-2.985 1.48H4.84v-8.86h7.62zM3.64 8.43h10.19V5.54H3.46v2.89zm1.421 11.26H2.99v1.36h1.933a3.725 3.725 0 01.138-1.36zm3.589-1.48a2.53 2.53 0 11-2.53 2.53 2.53 2.53 0 012.53-2.53zm9.51 0a2.53 2.53 0 11-2.53 2.53 2.53 2.53 0 012.53-2.53z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const PetIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 57"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 93"
        d="M16.779 21.092L14 19l-2.8 2.113c.07.43 1.162 1.047 2.787 1.047 1.655 0 2.755-.638 2.792-1.068zm-6.761.206L7.26 18.25v-3.361L4.7 16.06l-3.01-3.53 6.05-5.67L10 4.64h8l2.241 2.241.019-.021 6.05 5.67-3.01 3.53-2.6-1.189v3.379l-2.715 3.031c-.175 1.2-1.838 2.079-3.985 2.079s-3.791-.884-3.982-2.06zm12.962-6.7l-2.28-1.047V8.92l3.96 3.71zm-5.44-8.76l1.9 1.9.1.1v9.97l-2.09 2.3-2.62-2-.18-.42 1.65-3.92h-4.6l1.65 3.95-.18.42-2.62 2-2.09-2.3v-10l.1-.1 1.9-1.9zM7.26 13.569V8.96l-3.91 3.67 1.67 1.97zM13.51 15l.49 1.14.49-1.14zm-1.62-4.47a.78.78 0 11-.78-.78.78.78 0 01.78.78zm5 .78a.78.78 0 10-.78-.78.78.78 0 00.78.78z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};
export const TravelIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path
        data-name="\uC0AC\uAC01\uD615 55"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 91"
        d="M7.6 20.11a1.706 1.706 0 00.275.221l-.015.009 2.9 4.69 2.93-2.93-.844-3.737 2.719-2.507 4.605 8.254 3.06-3.06-1.316-3.542 1.483-1.483-.849-.849-1.094 1.095-1.618-4.353 1.884-1.738c.94-.92 3.1-4.66 1.8-6s-5 .82-6 1.82l-1.725 1.866-4.364-1.618 1.093-1.093-.848-.849-1.483 1.483L6.66 4.48 3.6 7.53l8.243 4.609-2.516 2.719-3.717-.848-2.93 2.94 4.68 2.9.013-.021a1.736 1.736 0 00.227.281zm3.38 3l-1.616-2.6a6 6 0 002.464-1.2l.542 2.409zm9.47-.97l-3.975-7.124 2.41-2.222 2.955 7.946zM6.96 5.87l7.95 2.953-2.23 2.41L5.57 7.26zm.2 12.44a6.241 6.241 0 011.242-2.43l-2.415-.55-1.39 1.39zm11.685-11.9a8.393 8.393 0 013.512-1.511.489.489 0 01.35.1c.46.47-.79 3.3-1.79 4.3l-9.38 8.65c-.99.99-2.61 1.79-3.09 1.31s.32-2.11 1.32-3.11l8.2-8.922.995.995.849-.849z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </Svg>
  );
};
export const FavoriteIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 86"
        d="M19.25 3.5A6.988 6.988 0 0014 5.938 6.988 6.988 0 008.75 3.5a6.355 6.355 0 00-6.417 6.417c0 4.41 3.967 8 9.975 13.463L14 24.908l1.692-1.54c6.008-5.448 9.975-9.041 9.975-13.451A6.355 6.355 0 0019.25 3.5zm-5.133 18.142l-.117.116-.117-.116C8.33 16.613 4.667 13.288 4.667 9.917A3.987 3.987 0 018.75 5.833a4.56 4.56 0 014.165 2.754H15.1a4.53 4.53 0 014.153-2.754 3.987 3.987 0 014.083 4.084c-.003 3.371-3.666 6.696-9.219 11.725z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};
export const FavoriteFilledIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 87"
        d="M13.667 5.438A6.988 6.988 0 0118.917 3a6.355 6.355 0 016.417 6.417c0 4.406-3.96 8-9.96 13.438l-.015.013-1.692 1.54-1.692-1.528-.046-.042C5.947 17.402 2 13.815 2 9.417A6.355 6.355 0 018.417 3a6.988 6.988 0 015.25 2.438z"
        fill="#ff3f3f"
      />
    </Svg>
  );
};
export const FavoriteSmallIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 155"
        d="M15.6 5A4.791 4.791 0 0012 6.672 4.791 4.791 0 008.4 5 4.357 4.357 0 004 9.4c0 3.024 2.72 5.488 6.84 9.232L12 19.68l1.16-1.056C17.28 14.888 20 12.424 20 9.4A4.357 4.357 0 0015.6 5zm-3.52 12.44l-.08.08-.08-.08C8.112 13.992 5.6 11.712 5.6 9.4a2.734 2.734 0 012.8-2.8 3.128 3.128 0 012.856 1.888h1.5A3.108 3.108 0 0115.6 6.6a2.734 2.734 0 012.8 2.8c0 2.312-2.512 4.592-6.32 8.04z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const FavoriteFilledSmallIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 85"
        d="M15.6 5A4.791 4.791 0 0012 6.672 4.791 4.791 0 008.4 5 4.357 4.357 0 004 9.4c0 3.024 2.72 5.488 6.84 9.232L12 19.68l1.16-1.056C17.28 14.888 20 12.424 20 9.4A4.357 4.357 0 0015.6 5z"
        fill="#ff3f3f"
      />
    </Svg>
  );
};

export const StarFiiledIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        data-name="\uD328\uC2A4 328"
        d="M12 17.77l6.18 3.73-1.64-7.03L22 9.74l-7.19-.61L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03z"
        fill="#553aed"
      />
    </Svg>
  );
};

export const ShippingFirstIcon = (props) => {
  return (
    <Svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 21.95L.08 17.18V4.89L11.01.05l10.93 5v12.13L11 21.95zm-.75-1.968L1.57 16.19V6.589l8.68 4.29v9.103zm1.5 0v-9.096l2.2-1.068v9.204l-2.2.96zm5.16-2.252l-1.46.638V9.09l1.46-.709v9.348zm-.904-10.577l-1.17.567-8.29-4.05 1.172-.519 8.288 4.002zM11 9.58l2.118-1.027-8.37-4.089-2.161.956L11 9.58zm7.41-1.926v9.422l2.03-.886V6.67l-2.03.984zm-.684-1.335L9.521 2.354 11 1.7l8.418 3.799-1.693.82z"
        fill={props.colored ? "#EDEAFB" : "#1D242D"}
      />
    </Svg>
  );
};

export const StarOutLineIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        data-name="\uD328\uC2A4 329"
        d="M12 17.77l6.18 3.73-1.64-7.03L22 9.74l-7.19-.61L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03z"
        fill="#dae3ef"
      />
    </Svg>
  );
};

export const ShippingSecondIcon = (props) => {
  return (
    <Svg
      width={24}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.05.28V10.6H.02v6.37h2.734a3.47 3.47 0 006.932 0h4.628a3.472 3.472 0 005.92 2.284 3.47 3.47 0 001.012-2.284h2.734V6.94l-2.91-3.63h-4.02V.28h-17zm17 4.53v5.79h5.43V7.46l-2.13-2.65h-3.3zm-1.724 9.536a3.47 3.47 0 00-.751 1.124h-5.15a3.468 3.468 0 00-5.659-1.124 3.47 3.47 0 00-.751 1.124H1.52v-3.28h15.53v-.09h5.43v3.37h-1.495a3.468 3.468 0 00-5.659-1.124zM1.53 10.59V8.5h14v2.09h-14zm0-3.59h14V1.78h-14V7zm3.579 8.177a2 2 0 112.222 3.327 2 2 0 01-2.222-3.327zm12.671-.337a2 2 0 100 4.001 2 2 0 000-4z"
        fill={props.colored ? "#EDEAFB" : "#1D242D"}
      />
    </Svg>
  );
};

export const ShippingThirdIcon = (props) => {
  return (
    <Svg
      width={26}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.68 10.29L.8 9.07 13 .33l12.2 8.74-.88 1.22-2.67-1.915V21.1H4.35V8.375L1.68 10.29zM13 2.17L20.15 7.3V19.6h-3.18v-7.78H9.03v7.78H5.85V7.299L13 2.17zM10.53 19.6h4.94v-6.28h-4.94v6.28z"
        fill={props.colored ? "#EDEAFB" : "#1D242D"}
      />
    </Svg>
  );
};
export const StarFiiledSmallIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <Path fill="none" d="M0 0h16v16H0z" />
      <Path
        data-name="\uD328\uC2A4 322"
        d="M8 11.845l4.12 2.49-1.093-4.69 3.64-3.15-4.793-.41L8 1.665l-1.873 4.42-4.793.41 3.64 3.15-1.094 4.69z"
        fill="#553aed"
      />
    </Svg>
  );
};
export const ShippingFourthIcon = (props) => {
  return (
    <Svg
      width={24}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.05.28V10.6H.02v6.37h2.734a3.47 3.47 0 006.932 0h4.628a3.472 3.472 0 005.92 2.284 3.47 3.47 0 001.012-2.284h2.734V6.94l-2.91-3.63h-4.02V.28h-17zm17 4.53v5.79h5.43V7.46l-2.13-2.65h-3.3zm-1.724 9.536a3.47 3.47 0 00-.751 1.124h-5.15a3.468 3.468 0 00-5.659-1.124 3.47 3.47 0 00-.751 1.124H1.52v-3.28h15.53v-.09h5.43v3.37h-1.495a3.468 3.468 0 00-5.659-1.124zM1.53 10.59V8.5h14v2.09h-14zm0-3.59h14V1.78h-14V7zm3.579 8.177a2 2 0 112.222 3.327 2 2 0 01-2.222-3.327zm12.671-.337a2 2 0 100 4.001 2 2 0 000-4z"
        fill={props.colored ? "#EDEAFB" : "#1D242D"}
      />
    </Svg>
  );
};
export const StarOutLineSmallIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <Path fill="none" d="M0 0h16v16H0z" />
      <Path
        data-name="\uD328\uC2A4 323"
        d="M8 11.845l4.12 2.49-1.093-4.69 3.64-3.15-4.793-.41L8 1.665l-1.873 4.42-4.793.41 3.64 3.15-1.094 4.69z"
        fill="#dae3ef"
      />
    </Svg>
  );
};
export const ShippingFifthIcon = (props) => {
  return (
    <Svg
      width={24}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.46 16.76h-3.413L18.8 19.53l-9.85.23-3.91-1.42H4.7v1.24H.54V8.66H4.7v.523c.55-.195 1.287-.332 2.24-.28V.24h16.52v16.52zM18.17 1.74h3.79v13.52H11.473l-.803-1.1h2.72l2-2.75-1.16-1.19-4.35-.43a4.87 4.87 0 00-1.44-.668V1.74h3.79v4.84h5.94V1.74zm-1.5 0h-2.94v3.34h2.94V1.74zM4.7 10.871v5.97h.73l3.77 1.38 8.67-.18.45-1h-7.37l-3.23-4.37h4.93l.73-1-4.13-.41-.19-.19a3.42 3.42 0 00-1.64-.59c-1.545-.212-2.373.16-2.72.39zm-1.5 7.21H2.04v-7.92H3.2v7.92z"
        fill={props.colored ? "#EDEAFB" : "#1D242D"}
      />
    </Svg>
  );
};

export const DownArrowIcon = (props) => {
  return (
    <Svg
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
        fill={props.color ? props.color : "#7F8B9D"}
      />
    </Svg>
  );
};

export const FilterIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 826"
        d="M10.333 17h3.334v-1.667h-3.334zM4.5 7v1.667h15V7zM7 12.833h10v-1.666H7z"
        fill="#fff"
      />
    </Svg>
  );
};

export const CloseIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        fill="#7F8B9D"
      />
    </Svg>
  );
};
export const DownIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 828"
        d="M8 10l4.17 4.167L16.34 10z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const SettingIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94 0 .31.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.61 3.61 0 018.4 12c0-1.98 1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
        fill="#7F8B9D"
      />
    </Svg>
  );
};

export const ListIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 827"
        d="M11.17 7.833h5V9.5h-5zm0 3.334h5v1.666h-5zm0 3.333h5v1.667h-5zM7.83 7.833H9.5V9.5H7.83zm0 3.334H9.5v1.666H7.83zm0 3.333H9.5v1.667H7.83zm10.92-10H5.25a.745.745 0 00-.75.75v13.5a.8.8 0 00.75.75h13.5a.888.888 0 00.75-.75V5.25a.808.808 0 00-.75-.75zm-.92 13.333H6.17V6.167h11.66z"
        fill="#7f8b9d"
      />
    </Svg>
  );
};

export const DoneIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <G data-name="\uADF8\uB8F9 23" transform="translate(-3393 4085)">
        <Rect
          data-name="\uC0AC\uAC01\uD615 48"
          width={20}
          height={20}
          rx={10}
          transform="translate(3395 -4083)"
          fill="#553aed"
        />
        <Path
          data-name="\uD328\uC2A4 74"
          d="M3410.325-4076.529a.905.905 0 011.379 1.166l-.087.1-6.668 6.789a.906.906 0 01-1.2.083l-.093-.083-4.648-4.732a.905.905 0 011.191-1.357l.1.088 4 4.075z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export const BackArrowIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 37"
        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
        fill="#7F8B9D"
      />
    </Svg>
  );
};

export const SliderLeftIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={42} {...props}>
      <Path fill="none" d="M0 0h30v42H0z" />
      <G data-name="\uADF8\uB8F9 186" fill="#fff">
        <Path
          data-name="\uD328\uC2A4 841"
          d="M19.093 4.684L6.487 20.269c-.39.476-.158 1.09.512 1.366a1.739 1.739 0 001.914-.366L21.52 5.683c.386-.478.157-1.089-.513-1.365a1.739 1.739 0 00-1.914.366z"
        />
        <Path
          data-name="\uD328\uC2A4 842"
          d="M21.52 35.873L8.912 20.288a1.739 1.739 0 00-1.914-.366c-.671.272-.9.888-.512 1.366l12.606 15.584a1.739 1.739 0 001.913.366c.67-.275.9-.887.513-1.365z"
        />
      </G>
    </Svg>
  );
};

export const SliderRightIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={42} {...props}>
      <Path fill="none" d="M0 0h30v42H0z" />
      <G data-name="\uADF8\uB8F9 186" fill="#fff">
        <Path
          data-name="\uD328\uC2A4 841"
          d="M10.906 4.683l12.607 15.584c.39.477.157 1.09-.513 1.367a1.739 1.739 0 01-1.913-.367L8.48 5.682c-.39-.476-.159-1.09.512-1.366a1.739 1.739 0 011.913.367z"
        />
        <Path
          data-name="\uD328\uC2A4 842"
          d="M8.48 35.872l12.608-15.584A1.739 1.739 0 0123 19.922c.672.272.9.888.513 1.366L10.907 36.872a1.739 1.739 0 01-1.914.365c-.67-.276-.899-.887-.512-1.365z"
        />
      </G>
    </Svg>
  );
};

export const NavMenu = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 273"
        d="M24 8H4V6h20zm0 7H4v-2h20zM4 22h20v-2H4z"
        fill="#1d242d"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export const NavSearch = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 274"
        d="M19.495 12.165a7.5 7.5 0 11-7.5-7.5 7.5 7.5 0 017.5 7.5zm-1.341 7.233a9.5 9.5 0 111.378-1.45l5.974 5.974-1.414 1.414z"
        fill={props.active ? colors.purple : "#1d242d"}
        fillRule="evenodd"
      />
    </Svg>
  );
};
export const NavHome = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <G
        data-name="\uADF8\uB8F9 59"
        fill="none"
        stroke={props.active ? colors.purple : "#1d242d"}
        strokeWidth={2}
      >
        <Path data-name="\uD328\uC2A4 276" d="M22.4 13.588V24H5.6V13.588" />
        <Path data-name="\uD328\uC2A4 275" d="M26 13.588L14 4 2 13.588" />
      </G>
    </Svg>
  );
};
export const NavPocket = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 277"
        d="M25 14A11 11 0 1114 3a11 11 0 0111 11zm2 0A13 13 0 1114 1a13 13 0 0113 13zm-15.284-2.846c0 .821.642 1.372 2.633 1.879s4.106 1.372 4.117 3.847c-.011 1.811-1.361 2.79-3.071 3.116v1.879h-2.632v-1.913a3.647 3.647 0 01-3.218-3.341h1.935c.1 1.035.81 1.845 2.61 1.845 1.924 0 2.363-.967 2.363-1.564 0-.81-.439-1.586-2.633-2.1-2.441-.585-4.117-1.6-4.117-3.612 0-1.7 1.361-2.8 3.06-3.161v-1.9h2.621v1.924a3.491 3.491 0 012.8 3.341H16.26c-.045-1.1-.63-1.845-2.182-1.845-1.473-.004-2.362.66-2.362 1.605z"
        fill={props.active ? colors.purple : "#1d242d"}
        fillRule="evenodd"
      />
    </Svg>
  );
};
export const NavMypage = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
      <Path d="M0 0h28v28H0z" fill="none" />
      <Path
        data-name="\uD328\uC2A4 278"
        d="M14 25a10.959 10.959 0 007.193-2.677l-.122.048a7.9 7.9 0 00-14.142 0l-.122-.048A10.959 10.959 0 0014 25zm0-9a9.611 9.611 0 018.583 4.88 11 11 0 10-17.166 0A9.611 9.611 0 0114 16zm0 11A13 13 0 101 14a13 13 0 0013 13zm2.5-16A2.5 2.5 0 1114 8.5a2.5 2.5 0 012.5 2.5zm2 0A4.5 4.5 0 1114 6.5a4.5 4.5 0 014.5 4.5z"
        fill={props.active ? colors.purple : "#1d242d"}
        fillRule="evenodd"
      />
    </Svg>
  );
};
