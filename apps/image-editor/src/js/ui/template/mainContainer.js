export default ({
  locale,
  biImage,
  commonStyle,
  headerStyle,
  loadButtonStyle,
  downloadButtonStyle,
  submenuStyle,
}) => `
    <div class="tui-image-editor-main-container" style="${commonStyle}">
        <div class="tui-image-editor-header" style="${headerStyle}">
            <div class="tui-image-editor-header-logo">
                <img src="${biImage}" />
            </div>
            <div class="tui-image-editor-header-buttons">
                <div style="${loadButtonStyle}">
                    ${locale.localize('Load')}
                    <input type="file" class="tui-image-editor-load-btn" />
                </div>
                <label for="shapeWidthSize" style="color: #fff">形狀大小(px): </label>
                <input type="number" name="shapeWidthSize" id="shapeWidthSize" value="50" style="height: 40px; width: 150px; font-size: 20px;">
                <button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
                    ${locale.localize('下載圖片')}
                </button>
            </div>
        </div>
        <div class="tui-image-editor-main">
            <div class="tui-image-editor-submenu">
                <div class="tui-image-editor-submenu-style" style="${submenuStyle}"></div>
            </div>
            <div class="tui-image-editor-wrap">
                <div class="tui-image-editor-size-wrap">
                    <div class="tui-image-editor-align-wrap">
                        <div class="tui-image-editor"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
