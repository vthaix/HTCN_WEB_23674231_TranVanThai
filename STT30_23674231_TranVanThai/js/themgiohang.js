function themVaoGio(tieuDe, gia, hinhAnh) {
    let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

    const index = gioHang.findIndex(sp => sp.tieuDe === tieuDe);
    if (index !== -1) {
        gioHang[index].soLuong += 1;
    } else {
        gioHang.push({
            tieuDe: tieuDe,
            gia: gia,
            hinhAnh: hinhAnh,
            soLuong: 1
        });
    }

    localStorage.setItem("gioHang", JSON.stringify(gioHang));
}