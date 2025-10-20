
//ーーーーーーーーーーーーーーーーnav背景をトップ以外で半透明にーーーーーーーーーーーーーーーー

// DOMContentLoaded イベントで、HTMLが完全に読み込まれてからスクリプトを実行
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav'); // nav要素を取得

    // スクロールイベントリスナーを設定
    window.addEventListener('scroll', function() {
        // window.scrollY は現在のスクロール位置（垂直方向）
        // 例えば、50pxスクロールしたら背景色を変える
        if (window.scrollY > 50) {
            nav.classList.add('scrolled'); // scrolledクラスを追加
        } else {
            nav.classList.remove('scrolled'); // scrolledクラスを削除
        }
    });

    // ページロード時にすでにスクロールされている可能性があるため、一度実行
    // (例えば、リロード時にスクロール位置が保存されている場合など)
    // この処理がないと、リロード時にスクロールされていてもtransparentのままになってしまう
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    }
});