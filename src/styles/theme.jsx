function FONT({ family, weight, size }) {
  return `
    font-family: ${family}, sans-serif;
    font-weight: ${weight};
    font-size: ${size}px;
  `;
}

export const theme = {
  colors: {
    // grayscale_1d: "#1D1D1D",
    // grayscale_5f: "#5F5F5F",
    // grayscale_7d: "#7D7D7D",
    // grayscale_88: "#888888",
    // grayscale_a6: "#A6A6A6",
    // grayscale_aa: "#AAAAAA",
    // grayscale_bc: "#BCBCBC",
    // grayscale_d9: "#D9D9D9",
    // grayscale_de: "#DEDEDE",
    // grayscale_e7: "#E7E7E7",
    // grayscale_e9: "#E9E9E9",
    // grayscale_f6: "#F6F6F6",

    state_red: "#FF0000",
    state_blue: "#038EFF",
    state_yellow: "#FF9500",
    bg_red: "#FCE5E5",
    bg_blue: "#E6F2FC",
    bg_yellow: "#FCF3E5",
    // green: "#00EA1F",

    error: "#FC3200",

    primary: "#1D1D1D", // 메인 색상
    secondary: "#FFF", // 서브 색상
  },
  fonts: {
    // thin(1), extralight(2), light(3), regular(4), medium(5), semibold(6), bold(7), extrabold(8), black(9)

    pre_regular_12: FONT({ family: "Pretendard", weight: 400, size: 12 }),
    pre_medium_13: FONT({ family: "Pretendard", weight: 500, size: 13 }),
    pre_semibold_13: FONT({ family: "Pretendard", weight: 600, size: 13 }),
    pre_medium_14: FONT({ family: "Pretendard", weight: 500, size: 14 }),
    pre_semibold_14: FONT({ family: "Pretendard", weight: 600, size: 14 }),
    pre_medium_16: FONT({ family: "Pretendard", weight: 500, size: 16 }),
    pre_semibold_16: FONT({ family: "Pretendard", weight: 600, size: 16 }),
    pre_semibold_18: FONT({ family: "Pretendard", weight: 600, size: 18 }),
    pre_semibold_20: FONT({ family: "Pretendard", weight: 600, size: 20 }),
    pre_bold_18: FONT({ family: "Pretendard", weight: 700, size: 18 }),
    pre_bold_20: FONT({ family: "Pretendard", weight: 700, size: 20 }),
    pre_extrabold_30: FONT({ family: "Pretendard", weight: 800, size: 30 }),

    gi_regular_10: FONT({ family: "Giants", weight: 400, size: 10 }),
    gi_regular_13: FONT({ family: "Giants", weight: 400, size: 13 }),
    gi_bold_20: FONT({ family: "Giants", weight: 700, size: 20 }),
    gi_bold_22: FONT({ family: "Giants", weight: 700, size: 22 }),

    ws_semibold_20: FONT({ family: "WorkSans", weight: 600, size: 20 }),
  },
};
