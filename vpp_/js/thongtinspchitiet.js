const renderSachDetail = (product, productId) => {
    const productListContainer = document.getElementById(productId);

    const productHtml = `
        <div class="col-md-5 text-center">
            <div class="product-card">
                <img src="${product.imageUrl}" class="img-fluid mb-2">
                <h6 style="font-weight: bold;">${product.name}</h6>
                <p>Tác giả: <i style="font-weight: bold;">${product.author}</i></p>

            </div>
        </div>
        <div class="col-md-7">
            <div class="bg-white p-4 shadow rounded">
                <h5 class="fw-bold mb-3">Thông tin sản phẩm</h5>
                <p><strong>Tác giả:</strong> ${product.author}</p>
                <p><strong>Nhà xuất bản:</strong> ${product.publisher}</p>
                <p><strong>Năm xuất bản:</strong> ${product.namxb}</p>
                <p><strong>Số trang:</strong> ${product.sotrang}</p>
                <p class="text-danger fw-bold"><strong>Giá:</strong> ${product.price}đ</p>
                <p><strong>Đánh giá:</strong>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning"></i>
                </p>
                <p class="mt-4">
                    <strong>Mô tả:</strong><br> ${product.mota}
                </p>

                <hr>

                <h6 class="fw-bold">Thông tin vận chuyển</h6>
                <p>Giao hàng từ <strong>${product.vanchuyen}</strong></p>

                <div class="d-flex justify-content-start gap-3 mt-3">
                    <button class="btn btn-danger" onclick="themVaoGio('${product.name}', ${product.price}, '${product.imageUrl}')">
                        Thêm vào giỏ hàng
                    </button>
                    <a href="index.html" class="btn btn-dark">Quay lại</a>
                </div>
            </div>
        </div>
    `;
    productListContainer.innerHTML += productHtml;
};

const renderHoaCuDetail = (product, productId) => {
    const productListContainer = document.getElementById(productId);
    const productHtml = `
        <div class="col-md-5 text-center">
            <div class="product-card">
                <img src="${product.imageUrl}" class="img-fluid mb-2">
                <h6 style="font-weight: bold;">${product.name}</h6>
                <p>Thương hiệu: <strong>${product.brand}</strong></p>

            </div>
        </div>
        <div class="col-md-7">
            <div class="bg-white p-4 shadow rounded">
                <h5 class="fw-bold mb-3">Thông tin sản phẩm</h5>
                <p><strong>Thương hiệu:</strong> ${product.brand}</p>
                <p><strong>Nhà cung cấp:</strong> ${product.publisher}</p>
                <p><strong>Nơi sản xuất:</strong> ${product.region}</p>
                <p><strong>Số Lượng/Bộ:</strong> ${product.soluong}</p>
                <p class="text-danger fw-bold"><strong>Giá:</strong> ${product.price}đ</p>
                <p><strong>Đánh giá:</strong>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning"></i>
                </p>
                <p class="mt-4">
                    <strong>Mô tả:</strong><br>${product.mota}
                </p>

                <hr>

                <h6 class="fw-bold">Thông tin vận chuyển</h6>
                <p>${product.vanchuyen}</strong></p>

                <div class="d-flex justify-content-start gap-3 mt-3">
                    <button class="btn btn-danger" onclick="themVaoGio('${product.name}', ${product.price}, '${product.imageUrl}')">
                        Thêm vào giỏ hàng
                    </button>
                    <a href="index.html" class="btn btn-dark">Quay lại</a>
                </div>
            </div>
        </div>
    `;
    productListContainer.innerHTML += productHtml;
}

const renderQuaDetail = (product, productId) => {
    const productListContainer = document.getElementById(productId);
    const productHtml = `
        <div class="col-md-5 text-center">
            <div class="product-card">
                <img src="${product.imageUrl}" class="img-fluid mb-2">
                <h6 style="font-weight: bold;">${product.name}</h6>
                <p>Thương hiệu: <strong>${product.brand}</strong></p>

            </div>
        </div>
        <div class="col-md-7">
            <div class="bg-white p-4 shadow rounded">
                <h5 class="fw-bold mb-3">Thông tin sản phẩm</h5>
                <p><strong>Thương hiệu:</strong> ${product.brand}</p>
                <p><strong>Nhà cung cấp:</strong> ${product.publisher}</p>
                <p><strong>Nơi sản xuất:</strong> ${product.region}</p>
                <p><strong>Số Lượng/Bộ:</strong> ${product.soluong}</p>
                <p class="text-danger fw-bold"><strong>Giá:</strong> ${product.price}đ</p>
                <p><strong>Đánh giá:</strong>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning"></i>
                </p>
                <p class="mt-4">
                    <strong>Mô tả:</strong><br>${product.mota}
                </p>

                <hr>

                <h6 class="fw-bold">Thông tin vận chuyển</h6>
                <p>${product.vanchuyen}</strong></p>

                <div class="d-flex justify-content-start gap-3 mt-3">
                    <button class="btn btn-danger" onclick="themVaoGio('${product.name}', ${product.price}, '${product.imageUrl}')">
                        Thêm vào giỏ hàng
                    </button>
                    <a href="index.html" class="btn btn-dark">Quay lại</a>
                </div>
            </div>
        </div>
    `;
    productListContainer.innerHTML += productHtml;
}

// Gộp tất cả dữ liệu lại
const data = {
    sach: sach,
    qua: qua,
    hoacu: hoacu
};

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        type: params.get("type"),
        id: parseInt(params.get("id")),
    };
}

window.onload = function() {
    const { type, id } = getQueryParams();

    const product = data[type /* sach*/ ].find(item => item.id === id);
    if (!product) {
        document.querySelector(".chitietsp").innerHTML = `<p class="text-danger">Không tìm thấy sản phẩm</p>`;
        return;
    }

    const container = document.querySelector(".chitietsp");
    const containerId = type + "-" + id;

    const div = document.createElement("div");
    div.classList.add("row", "mt-4");
    div.id = containerId;
    container.appendChild(div);

    if (type === "sach") renderSachDetail(product, containerId);
    else if (type === "hoacu") renderHoaCuDetail(product, containerId);
    else if (type === "qua") renderQuaDetail(product, containerId);
};