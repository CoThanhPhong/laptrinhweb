
/* =========================================================
    1. DỮ LIỆU: mảng các object công việc
    Mỗi công việc là 1 object { id, noiDung, hoanThanh }
    id dùng để phân biệt các công việc với nhau (giống mssv
    trong bài Quản Lý Sinh Viên)
    ========================================================= */
let danhSachCV = [
{ id: 1, noiDung: "Học bài JavaScript", hoanThanh: false },
{ id: 2, noiDung: "Làm bài tập về nhà", hoanThanh: true },
{ id: 3, noiDung: "Ôn thi giữa kỳ", hoanThanh: false }
];

// Biến đếm để cấp id mới cho công việc tiếp theo được thêm vào
let idTiepTheo = 4;

/* =========================================================
    2. LẤY THAM CHIẾU CÁC PHẦN TỬ DOM CẦN DÙNG NHIỀU LẦN
    ========================================================= */
let danhSach = document.getElementById("danhSach")
/* =========================================================
    3. HÀM TÌM VỊ TRÍ 1 CÔNG VIỆC TRONG MẢNG THEO ID
    Dùng vòng lặp for thông thường, trả về index nếu tìm thấy,
    trả về -1 nếu không có.
    ========================================================= */
function findIndexById (id) {
    let temp = -1
    danhSachCV.forEach((congViec, index) => {
        if (congViec.id == id) {
            temp = index
        }
    });
    return temp
}

/* =========================================================
    4. HÀM VẼ LẠI TOÀN BỘ DANH SÁCH DỰA TRÊN danhSachCV
    Dùng vòng lặp for để nối chuỗi HTML. Mỗi khi dữ liệu thay
    đổi xong đều gọi lại hàm này để giao diện cập nhật theo.
    ========================================================= */
function updateList () {
    let html = ''
    danhSachCV.forEach((congViec) => {
        html += 
        `<li>
            <input type='checkbox' ${congViec.hoanThanh?'checked':''} onChange='toggleDone(${congViec.id})'/>
            <span class='${congViec.hoanThanh?"hoan-thanh":"noi-dung"}'>${congViec.noiDung}</span>
            <button class='btn-xoa' onclick='deleteCongViec(${congViec.id})'>Xóa</button>
        </li>`
    })
    danhSach.innerHTML = html
}
/* =========================================================
    5. HÀM THÊM CÔNG VIỆC MỚI
    ========================================================= */
function themCongViec() {
    let noiDung = document.getElementById("noiDung").value.trim()
    if (!noiDung) {
        return
    }
    danhSachCV.push({
        id: idTiepTheo,
        noiDung: noiDung,
        hoanThanh: false
    })
    idTiepTheo += 1
    document.getElementById("noiDung").value = ''
    updateList()
}

/* =========================================================
    6. HÀM XÓA 1 CÔNG VIỆC THEO ID
    ========================================================= */
function deleteCongViec(id) {
    let index = findIndexById(id)
    if (index == -1) {
        return
    }
    danhSachCV.splice(index, 1)
    idTiepTheo -= 1
    updateList()
}

/* =========================================================
    7. HÀM ĐÁNH DẤU HOÀN THÀNH / BỎ ĐÁNH DẤU
    Đảo ngược giá trị true/false của thuộc tính hoanThanh
    ========================================================= */
function toggleDone(id) {
    let index = findIndexById(id)
    if (index == -1) {
        return
    }
    danhSachCV[index].hoanThanh = !danhSachCV[index].hoanThanh
    updateList()
}

/* =========================================================
    8. HIỂN THỊ DANH SÁCH LẦN ĐẦU KHI TẢI TRANG
    ========================================================= */
updateList()