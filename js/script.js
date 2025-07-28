// Data mẫu cho sản phẩm - ĐÃ SỬA LỖI DẤU TIẾNG VIỆT TRONG CATEGORY
const products = [
    // --- DANH MỤC: Valentine (5 sản phẩm) ---
    { id: 'FL001', name: 'Bó Hoa Hồng Đỏ Ecuador', price: 450000, image: 'img/Bó Hoa Hồng Đỏ Ecuador.jpg', description: 'Những bông hồng đỏ Ecuador nhập khẩu cao cấp, cánh dày, lâu tàn. Tượng trưng cho tình yêu nồng cháy và vĩnh cửu.', category: 'Valentine' },
    { id: 'FL016', name: 'Hộp Hoa Valentine Trái Tim', price: 650000, image: 'img/Hộp Hoa Valentine Trái Tim.jpg', description: 'Hộp hoa hình trái tim với hoa hồng đỏ và socola Ferrero Rocher, món quà lãng mạn và ngọt ngào cho người ấy.', category: 'Valentine' },
    { id: 'FL017', name: 'Bó Hoa Tulip Hồng Dịu Dàng', price: 580000, image: 'img/Bó Hoa Tulip Hồng Dịu Dàng.jpg', description: 'Bó hoa tulip hồng pastel tượng trưng cho một tình yêu mới chớm, đầy mộng mơ và sự quan tâm chân thành.', category: 'Valentine' },
    { id: 'FL018', name: 'Gấu Bông và Hoa Hồng Sáp', price: 490000, image: 'img/Gấu Bông và Hoa Hồng Sáp.jpg', description: 'Sự kết hợp đáng yêu giữa gấu bông xinh xắn và hoa hồng sáp thơm vĩnh cửu, món quà tồn tại mãi với thời gian.', category: 'Valentine' },
    { id: 'FL019', name: 'Bó Hoa Mix Tình Yêu', price: 520000, image: 'img/Bó Hoa Mix Tình Yêu.jpg', description: 'Bó hoa kết hợp nhiều loại hoa mang sắc đỏ và hồng, gửi gắm thông điệp tình yêu đa sắc màu và mãnh liệt.', category: 'Valentine' },

    // --- DANH MỤC: Khai trương (5 sản phẩm) --- Sửa: 'Khai truong' -> 'Khai trương'
    { id: 'FL002', name: 'Lẵng Hoa Lan Hồ Điệp Trắng', price: 850000, image: 'img/Lẵng Hoa Lan Hồ Điệp Trắng.jpg', description: 'Lẵng lan hồ điệp trắng tinh khôi, biểu tượng của sự sang trọng, thanh lịch và tài lộc. Thích hợp làm quà khai trương.', category: 'Khai trương' },
    { id: 'FL004', name: 'Kệ Hoa Hướng Dương & Ly Vàng', price: 700000, image: 'img/Kệ Hoa Hướng Dương & Ly Vàng.jpg', description: 'Kệ hoa kết hợp hướng dương rực rỡ và ly vàng sang trọng. Mang ý nghĩa chúc mừng thành công, phát đạt.', category: 'Khai trương' },
    { id: 'FL020', name: 'Kệ Hoa Hồng Môn Phát Lộc', price: 950000, image: 'img/Kệ Hoa Hồng Môn Phát Lộc.jpg', description: 'Kệ hoa khai trương với hoa hồng môn đỏ rực, biểu tượng của may mắn, thịnh vượng và tài lộc cho gia chủ.', category: 'Khai trương' },
    { id: 'FL021', name: 'Kệ Hoa Đồng Tiền Rực Rỡ', price: 750000, image: 'img/Kệ Hoa Đồng Tiền Rực Rỡ.jpg', description: 'Kệ hoa với sắc màu tươi sáng của hoa đồng tiền, mang ý nghĩa tiền tài, may mắn và sự khởi đầu thuận lợi.', category: 'Khai trương' },
    { id: 'FL022', name: 'Lẵng Hoa Cát Tường Như Ý', price: 880000, image: 'img/Lẵng Hoa Cát Tường Như Ý.jpg', description: 'Lẵng hoa cát tường với ý nghĩa "vạn sự như ý", là lời chúc tốt đẹp nhất gửi đến đối tác trong ngày khai trương.', category: 'Khai trương' },

    // --- DANH MỤC: Tình yêu (5 sản phẩm) --- Sửa: 'Tình yêu'
    { id: 'FL003', name: 'Bó Hoa Baby Trắng Tinh Khôi', price: 320000, image: 'img/Bó Hoa Baby Trắng Tinh Khôi.jpg', description: 'Hàng ngàn bông hoa baby trắng nhỏ li ti, đại diện cho tình yêu ngây thơ, trong sáng và vĩnh cửu.', category: 'Tình yêu' },
    { id: 'FL009', name: 'Bó Hoa Thủy Tiên Tím Mộng Mơ', price: 420000, image: 'img/Bó Hoa Thủy Tiên Tím Mộng Mơ.jpg', description: 'Những cành hoa thủy tiên tím thanh tao, thể hiện sự thủy chung, son sắt. Tuyệt vời để dành tặng người yêu hoặc vợ.', category: 'Tình yêu' },
    { id: 'FL013', name: 'Bó Hoa Cúc Họa Mi Trong Sáng', price: 280000, image: 'img/Bó Hoa Cúc Họa Mi Trong Sáng.jpg', description: 'Những bông cúc họa mi nhỏ nhắn, trắng tinh khôi, biểu tượng của tình yêu chân thành và sự trong trắng.', category: 'Tình yêu' },
    { id: 'FL023', name: 'Bó Hoa Lavender Pháp', price: 480000, image: 'img/Bó Hoa Lavender Pháp.jpg', description: 'Bó hoa oải hương (lavender) khô từ Pháp, mang hương thơm thư giãn và biểu tượng cho một tình yêu chung thủy, bền chặt.', category: 'Tình yêu' },
    { id: 'FL024', name: 'Bó Hoa Salem Tím Vĩnh Cửu', price: 350000, image: 'img/Bó Hoa Salem Tím Vĩnh Cửu.jpg', description: 'Hoa salem với đặc tính không phai màu, là biểu tượng của một tình yêu bền vững và những kỷ niệm không bao giờ phai nhạt.', category: 'Tình yêu' },

    // --- DANH MỤC: Sinh nhật (5 sản phẩm) --- Sửa: 'Sinh nhat' -> 'Sinh nhật'
    { id: 'FL005', name: 'Bó Hoa Tulip Hà Lan Đa Sắc', price: 550000, image: 'img/Bó Hoa Tulip Hà Lan Đa Sắc.jpg', description: 'Những bông tulip nhập khẩu từ Hà Lan với nhiều màu sắc tươi tắn, tạo nên bó hoa đầy cảm xúc và lãng mạn.', category: 'Sinh nhật' },
    { id: 'FL025', name: 'Bó Hoa Hướng Dương Chúc Mừng', price: 450000, image: 'img/Bó Hoa Hướng Dương Chúc Mừng.jpg', description: 'Bó hoa hướng dương rạng rỡ, gửi lời chúc một tuổi mới luôn vui vẻ, lạc quan và hướng về những điều tốt đẹp.', category: 'Sinh nhật' },
    { id: 'FL026', name: 'Hộp Hoa Sinh Nhật Sang Trọng', price: 720000, image: 'img/Hộp Hoa Sinh Nhật Sang Trọng.jpg', description: 'Hộp hoa được thiết kế tinh xảo với các loại hoa cao cấp, là món quà sinh nhật đẳng cấp và đầy bất ngờ.', category: 'Sinh nhật' },
    { id: 'FL027', name: 'Bó Hoa Cẩm Chướng Tươi Vui', price: 380000, image: 'img/Bó Hoa Cẩm Chướng Tươi Vui.jpg', description: 'Hoa cẩm chướng với nhiều màu sắc rực rỡ, mang đến không khí vui tươi và lời chúc sức khỏe, hạnh phúc trong ngày sinh nhật.', category: 'Sinh nhật' },
    { id: 'FL028', name: 'Lẵng Hoa Quả và Hoa Tươi', price: 690000, image: 'img/Lẵng Hoa Quả và Hoa Tươi.jpg', description: 'Sự kết hợp độc đáo giữa hoa tươi và trái cây nhập khẩu, là món quà sinh nhật vừa đẹp mắt vừa thiết thực.', category: 'Sinh nhật' },

    // --- DANH MỤC: Tri ân (5 sản phẩm) --- Sửa: 'Tri an' -> 'Tri ân'
    { id: 'FL006', name: 'Chậu Cẩm Tú Cầu Xanh Lam', price: 380000, image: 'img/Chậu Cẩm Tú Cầu Xanh Lam.jpg', description: 'Chậu cẩm tú cầu màu xanh lam dịu mát, tượng trưng cho lòng biết ơn sâu sắc và sự thấu hiểu. Quà tặng ý nghĩa cho mẹ, cô giáo.', category: 'Tri ân' },
    { id: 'FL029', name: 'Bó Hoa Ly Vàng Biết Ơn', price: 460000, image: 'img/Bó Hoa Ly Vàng Biết Ơn.jpg', description: 'Bó hoa ly vàng thơm ngát, thể hiện sự kính trọng và lòng biết ơn chân thành đến những người đã giúp đỡ bạn.', category: 'Tri ân' },
    { id: 'FL030', name: 'Giỏ Hoa Cẩm Chướng Hồng', price: 500000, image: 'img/Giỏ Hoa Cẩm Chướng Hồng.jpg', description: 'Giỏ hoa cẩm chướng hồng tượng trưng cho tình mẹ, lòng biết ơn và sự ngưỡng mộ. Thích hợp tặng mẹ, cô giáo.', category: 'Tri ân' },
    { id: 'FL031', name: 'Bó Hoa Hướng Dương Tôn Kính', price: 430000, image: 'img/Bó Hoa Hướng Dương Tôn Kính.jpg', description: 'Hoa hướng dương luôn hướng về mặt trời, như tấm lòng luôn hướng về cha mẹ, thầy cô với sự tôn kính vô hạn.', category: 'Tri ân' },
    { id: 'FL032', name: 'Chậu Lan Hồ Điệp Tím', price: 750000, image: 'img/Chậu Lan Hồ Điệp Tím.jpg', description: 'Chậu lan hồ điệp tím sang trọng, thể hiện sự ngưỡng mộ, kính trọng, là món quà tri ân đẳng cấp.', category: 'Tri ân' },
    
    // --- DANH MỤC: Quà tặng (5 sản phẩm) --- Sửa: 'Qua tang' -> 'Quà tặng'
    { id: 'FL008', name: 'Hoa Hồng Môn Đỏ May Mắn', price: 300000, image: 'img/Hoa Hồng Môn Đỏ May Mắn.jpg', description: 'Chậu hoa Hồng Môn với bông hoa hình trái tim màu đỏ, là biểu tượng của may mắn, tài lộc và lòng hiếu khách.', category: 'Quà tặng' },
    { id: 'FL036', name: 'Hộp Quà Hoa Tươi và Nến Thơm', price: 550000, image: 'img/Hộp Quà Hoa Tươi và Nến Thơm.jpg', description: 'Hộp quà kết hợp giữa hoa tươi và nến thơm cao cấp, món quà tặng tinh tế giúp thư giãn tinh thần.', category: 'Quà tặng' },
    { id: 'FL037', name: 'Bình Hoa Giả Trang Trí', price: 450000, image: 'img/Bình Hoa Giả Trang Trí.jpg', description: 'Bình hoa lụa cao cấp, đẹp như hoa thật và bền mãi với thời gian, là món quà tặng trang trí tuyệt vời.', category: 'Quà tặng' },
    { id: 'FL038', name: 'Cây Kim Tiền Tài Lộc', price: 280000, image: 'img/Cây Kim Tiền Tài Lộc.jpg', description: 'Chậu cây kim tiền (phát tài), món quà tặng phong thủy mang ý nghĩa thu hút tài lộc, may mắn cho người nhận.', category: 'Quà tặng' },
    { id: 'FL039', name: 'Giỏ Quà Trái Cây Nhập Khẩu', price: 900000, image: 'img/Giỏ Quà Trái Cây Nhập Khẩu.jpg', description: 'Giỏ quà gồm các loại trái cây tươi ngon nhập khẩu, là món quà sức khỏe ý nghĩa và sang trọng.', category: 'Quà tặng' },
    
    // --- DANH MỤC: Đặc biệt (5 sản phẩm) --- Sửa: 'Dac biet' -> 'Đặc biệt'
    { id: 'FL011', name: 'Hộp Hoa Hoa Đào Đông Đỏ', price: 900000, image: 'img/Hộp Hoa Hoa Đào Đông Đỏ.jpg', description: 'Hộp hoa đào đông nhập khẩu màu đỏ rực rỡ, tượng trưng cho sự sung túc, may mắn và tài lộc ngày Tết.', category: 'Đặc biệt' },
    { id: 'FL044', name: 'Hoa Hồng Xanh Dương Vĩnh Cửu', price: 350000, image: 'img/Hoa Hồng Xanh Dương Vĩnh Cửu.jpg', description: 'Một bông hồng xanh dương được bảo quản theo công nghệ đặc biệt, tượng trưng cho tình yêu bất diệt và những điều không thể.', category: 'Đặc biệt' },
    { id: 'FL045', name: 'Bó Hoa Cầu Vồng (Rainbow Rose)', price: 750000, image: 'img/Bó Hoa Cầu Vồng (Rainbow Rose).jpg', description: 'Bó hoa hồng được nhuộm màu cầu vồng độc đáo, mang đến sự bất ngờ và thông điệp về một tình yêu đa sắc màu, vui tươi.', category: 'Đặc biệt' },
    { id: 'FL046', name: 'Hoa Hồng Leo', price: 800000, image: 'img/hoa hong leo.jpg', description: 'Bông hồng leo, là món quà tặng cao cấp, sang trọng và mang ý nghĩa vĩnh cửu.', category: 'Đặc biệt' },
    { id: 'FL047', name: 'Chậu Tuyết Mai Rừng', price: 1100000, image: 'img/Chậu Tuyết Mai Rừng.jpg', description: 'Chậu hoa tuyết mai rừng với những bông hoa trắng muốt, nhỏ xinh, mang vẻ đẹp thanh tao, quý phái cho ngày Tết.', category: 'Đặc biệt' },
    
    // --- DANH MỤC: Chia buồn (5 sản phẩm) --- Sửa: 'Chia buon' -> 'Chia buồn'
    { id: 'FL010', name: 'Lẵng Hoa Chia Buồn Trắng Tím', price: 650000, image: 'img/Lẵng Hoa Chia Buồn Trắng Tím.jpg', description: 'Lẵng hoa tang lễ trang trọng với ly trắng, cúc trắng và lan tím, gửi gắm sự tiếc thương và lời chia buồn sâu sắc.', category: 'Chia buồn' },
    { id: 'FL040', name: 'Kệ Hoa Chia Buồn Trắng Thuần Khiết', price: 1200000, image: 'img/Kệ Hoa Chia Buồn Trắng Thuần Khiết.jpg', description: 'Kệ hoa với tông màu trắng chủ đạo từ hoa ly, cúc, lan, thể hiện sự tinh khôi và lời cầu nguyện cho người đã khuất.', category: 'Chia buồn' },
    { id: 'FL041', name: 'Vòng Hoa Ly Vàng Vô Cực', price: 800000, image: 'img/Vòng Hoa Ly Vàng Vô Cực.jpg', description: 'Vòng hoa với hoa ly vàng và cúc vàng, gửi gắm niềm tiếc thương và sự trân trọng những kỷ niệm đã qua.', category: 'Chia buồn' },
    { id: 'FL042', name: 'Lẵng Hoa Cúc Trắng Tiễn Biệt', price: 700000, image: 'img/Lẵng Hoa Cúc Trắng Tiễn Biệt.jpg', description: 'Lẵng hoa cúc trắng mang ý nghĩa về sự tái sinh và lòng hiếu thảo, là lời tiễn biệt thanh thản, trang nghiêm.', category: 'Chia buồn' },
    { id: 'FL043', name: 'Bó Hoa Ly Trắng Chia Buồn', price: 450000, image: 'img/Bó Hoa Ly Trắng Chia Buồn.jpg', description: 'Bó hoa ly trắng đơn giản nhưng trang trọng, phù hợp để cá nhân đến viếng và thể hiện lòng thành kính.', category: 'Chia buồn' },
    
    // --- DANH MỤC: Trang trí (5 sản phẩm) --- Sửa: 'Trang tri' -> 'Trang trí'
    { id: 'FL014', name: 'Bình Hoa Thược Dược Đa Sắc', price: 400000, image: 'img/Bình Hoa Thược Dược Đa Sắc.jpg', description: 'Bình hoa thược dược với những cánh hoa nở rộ, màu sắc tươi tắn, thích hợp trang trí nhà cửa, mang đến không khí tươi vui.', category: 'Trang trí' },
    { id: 'FL048', name: 'Bình Hoa Loa Kèn (Huệ Tây)', price: 350000, image: 'img/Bình Hoa Loa Kèn (Huệ Tây).jpg', description: 'Bình hoa loa kèn trắng tinh khôi, mang vẻ đẹp thanh lịch và hương thơm dịu nhẹ, tô điểm cho không gian sống.', category: 'Trang trí' },
    { id: 'FL049', name: 'Bình Hoa Mẫu Đơn Lụa', price: 550000, image: 'img/Bình Hoa Mẫu Đơn Lụa.jpg', description: 'Bình hoa mẫu đơn bằng lụa cao cấp, mang vẻ đẹp vương giả, sang trọng và không bao giờ tàn.', category: 'Trang trí' },
    { id: 'FL050', name: 'Giỏ Treo Hoa Dừa Cạn', price: 250000, image: 'img/Giỏ Treo Hoa Dừa Cạn.jpg', description: 'Giỏ treo hoa dừa cạn rực rỡ, dễ chăm sóc, thích hợp để trang trí ban công, cửa sổ, mang thiên nhiên vào nhà.', category: 'Trang trí' },
    { id: 'FL051', name: 'Bình Hoa Sen Gỗ Trang Trí', price: 600000, image: 'img/Bình Hoa Sen Gỗ Trang Trí.jpg', description: 'Bình hoa sen được làm thủ công từ gỗ, mang vẻ đẹp mộc mạc, tĩnh tại và đầy tính nghệ thuật cho không gian thiền.', category: 'Trang trí' },
];


// Dữ liệu mẫu cho bài viết tin tức
const newsArticles = [
    {
        id: 'news1',
        title: '5 loại hoa đẹp nhất để tặng người yêu dịp hè',
        image: 'img/5 loai hoa.jpg',
        date: '15/07/2025',
        content: `
            <h2>Top 5 Loài Hoa Lý Tưởng Để Tặng Người Yêu Dịp Hè Tại Flower Shop</h2>
            <p>Mùa hè, mùa của những ngày nắng vàng rực rỡ, những chuyến đi và những khoảnh khắc lãng mạn bất tận. Giữa không khí ấy, một bó hoa tươi thắm sẽ là chất xúc tác tuyệt vời để thể hiện tình yêu, biến những ngày bình thường trở nên thật đặc biệt. Nếu bạn đang tìm kiếm một món quà mùa hè ý nghĩa cho người thương, hãy cùng Flower Shop khám phá 5 loài hoa lý tưởng nhất hiện đang có mặt tại cửa hàng của chúng tôi.</p>
            <hr>
            <h3>1. Hoa Hướng Dương - Ánh Mặt Trời Của Tình Yêu</h3>
            <p>Không có loài hoa nào tượng trưng cho mùa hè rõ nét hơn hoa hướng dương. Với sắc vàng rạng rỡ, luôn vươn mình về phía mặt trời, hướng dương là biểu tượng của sự lạc quan, niềm tin và một tình yêu thủy chung, ấm áp. Tặng một bó hướng dương cũng giống như bạn đang nói với người ấy rằng: "Em là mặt trời trong cuộc đời anh".</p>
            <p><strong>Tại Flower Shop, bạn có thể tham khảo:</strong> <a href="product-detail.html?id=FL025">Bó Hoa Hướng Dương Chúc Mừng (FL025)</a></p>
            
            <h3>2. Hoa Cẩm Tú Cầu - Sự Chân Thành Mộng Mơ</h3>
            <p>Với những chùm hoa tròn đầy, viên mãn và màu sắc nhẹ nhàng, cẩm tú cầu mang vẻ đẹp của sự mộng mơ và lãng mạn. Loài hoa này tượng trưng cho lòng biết ơn sâu sắc và sự thấu hiểu chân thành từ trái tim. Một chậu cẩm tú cầu xanh lam dịu mát sẽ là món quà tinh tế, mang đến cảm giác bình yên, thư thái cho người nhận trong những ngày hè oi ả.</p>
            <p><strong>Tại Flower Shop, bạn có thể tham khảo:</strong> <a href="product-detail.html?id=FL006">Chậu Cẩm Tú Cầu Xanh Lam (FL006)</a></p>

            <h3>3. Hoa Baby - Tình Yêu Tinh Khôi và Vĩnh Cửu</h3>
            <p>Những bông hoa baby nhỏ li ti, trắng muốt tựa như hàng ngàn vì sao nhỏ, tạo nên một bó hoa bồng bềnh, mềm mại. Hoa baby đại diện cho một tình yêu trong sáng, ngây thơ và vĩnh cửu. Đây là lựa chọn hoàn hảo cho những cặp đôi yêu thích sự nhẹ nhàng, tinh tế. Đặc biệt, phiên bản baby xanh biển độc đáo sẽ là một bất ngờ đầy thú vị.</p>
            <p><strong>Tại Flower Shop, bạn có thể tham khảo:</strong> <a href="product-detail.html?id=FL003">Bó Hoa Baby Trắng Tinh Khôi (FL003)</a> hoặc <a href="product-detail.html?id=FL012">Bó Hoa Baby Xanh Biển Độc Đáo (FL012)</a></p>

            <h3>4. Cúc Họa Mi - Nét Duyên Dáng Giản Dị</h3>
            <p>Cúc họa mi mang vẻ đẹp mộc mạc, giản dị mà đầy cuốn hút. Những bông hoa nhỏ nhắn với nhụy vàng và cánh trắng tinh khôi là biểu tượng của một tình yêu chân thành, không cầu kỳ nhưng vô cùng bền chặt. Một bó cúc họa mi sẽ mang đến cảm giác trong trẻo, tươi mới như chính mối tình của hai bạn.</p>
            <p><strong>Tại Flower Shop, bạn có thể tham khảo:</strong> <a href="product-detail.html?id=FL013">Bó Hoa Cúc Họa Mi Trong Sáng (FL013)</a></p>

            <h3>5. Hoa Lavender - Sự Thủy Chung và Bình Yên</h3>
            <p>Gắn liền với những cánh đồng tím biếc của nước Pháp, hoa oải hương (lavender) không chỉ có hương thơm thư giãn mà còn là biểu tượng của sự thủy chung, son sắt. Tặng một bó hoa lavender khô, bạn đang gửi gắm một lời hứa về một tình yêu bền chặt, cùng nhau đi qua những tháng năm bình yên. Đây là món quà độc đáo và sẽ còn mãi với thời gian.</p>
            <p><strong>Tại Flower Shop, bạn có thể tham khảo:</strong> <a href="product-detail.html?id=FL023">Bó Hoa Lavender Pháp (FL023)</a></p>
            <hr>
            <p>Mỗi loài hoa đều mang một câu chuyện và một thông điệp riêng. Hy vọng với những gợi ý trên, bạn sẽ chọn được một món quà mùa hè thật ưng ý để dành tặng người thương. Hãy ghé thăm danh mục <a href="products.html?category=Tình%20yêu">Hoa Tình Yêu</a> của chúng tôi để khám phá thêm nhiều sự lựa chọn tuyệt vời khác!</p>
        `
    },
    {
        id: 'news2',
        title: 'Bí quyết giữ hoa tươi lâu tại nhà',
        image: 'img/chamsoc.jpg',
        date: '10/07/2025',
        content: `
            <p>Ai cũng muốn những bó hoa tươi tắn mình nhận được có thể giữ được vẻ đẹp lâu nhất. Dưới đây là những bí quyết đơn giản giúp hoa của bạn tươi lâu hơn:</p>
            <h3>1. Cắt gốc hoa đúng cách</h3>
            <p>Khi mang hoa về nhà, hãy dùng dao sắc hoặc kéo chuyên dụng cắt vát gốc hoa một góc 45 độ dưới vòi nước chảy. Việc này giúp tăng diện tích hút nước và ngăn không khí lọt vào thân cây, gây tắc nghẽn.</p>
            <h3>2. Loại bỏ lá dưới mực nước</h3>
            <p>Bất kỳ lá nào nằm dưới mực nước trong bình sẽ bị thối rữa, tạo điều kiện cho vi khuẩn phát triển và làm ô nhiễm nước, rút ngắn tuổi thọ của hoa. Hãy loại bỏ tất cả những lá này.</p>
            <h3>3. Sử dụng dung dịch dưỡng hoa</h3>
            <p>Thay vì chỉ dùng nước lã, hãy thêm gói dung dịch dưỡng hoa chuyên dụng (flower food) vào bình. Dung dịch này cung cấp đường (nuôi dưỡng hoa), chất diệt khuẩn và chất điều chỉnh độ pH, giúp hoa hấp thụ nước tốt hơn.</p>
            <h3>4. Thay nước và vệ sinh bình thường xuyên</h3>
            <p>Thay nước mỗi ngày hoặc cách ngày, đồng thời rửa sạch bình hoa để loại bỏ vi khuẩn. Nếu không có dung dịch dưỡng hoa, bạn có thể tự làm dung dịch tại nhà với một ít đường, giấm trắng hoặc thuốc tẩy pha loãng.</p>
            <h3>5. Đặt hoa ở nơi phù hợp</h3>
            <p>Tránh đặt hoa ở nơi có ánh nắng trực tiếp, gần thiết bị điện tử tỏa nhiệt (như TV, máy tính), hoặc gần trái cây chín (trái cây chín thải ra khí ethylene làm hoa nhanh tàn). Nơi thoáng mát, tránh gió lùa là lý tưởng nhất.</p>
            <h3>6. Phun sương nhẹ cho cánh hoa</h3>
            <p>Một số loại hoa thích được phun sương nhẹ lên cánh hoa để giữ độ ẩm, đặc biệt là trong những ngày khô nóng. Tuy nhiên, tránh làm đọng nước quá nhiều trên cánh hoa dễ gây thối rữa.</p>
            <p>Áp dụng những mẹo nhỏ này, bạn sẽ kéo dài được vẻ đẹp của những bó hoa yêu thích!</p>
        `
    },
    {
        id: 'news3',
        title: 'Ý nghĩa của các loài hoa phổ biến',
        image: 'img/ynghia.jpg',
        date: '01/07/2025',
        content: `
            <p>Mỗi loài hoa mang trong mình một câu chuyện, một ý nghĩa riêng biệt. Hiểu được ngôn ngữ của hoa sẽ giúp bạn gửi gắm những thông điệp tinh tế và phù hợp nhất đến người nhận:</p>
            <h3>1. Hoa Hồng</h3>
            <p><strong>Hồng đỏ:</strong> Tình yêu nồng cháy, lãng mạn, đam mê.<br><strong>Hồng trắng:</strong> Tình yêu trong sáng, thuần khiết, sự khởi đầu mới.<br><strong>Hồng vàng:</strong> Tình bạn, niềm vui, sự ghen tuông (trong một số trường hợp).<br><strong>Hồng phấn:</strong> Sự ngưỡng mộ, lòng biết ơn, sự dịu dàng.</p>
            <h3>2. Hoa Ly</h3>
            <p><strong>Ly trắng:</strong> Sự thuần khiết, đức hạnh, thanh cao.<br><strong>Ly vàng:</strong> Sự biết ơn, lòng trung thành, sự sung túc.<br><strong>Ly hồng:</strong> Tình yêu lãng mạn, sự ngưỡng mộ.</p>
            <h3>3. Hoa Hướng Dương</h3>
            <p>Lòng trung thành, sự trường thọ, niềm tin, hy vọng, năng lượng tích cực. Hướng về phía trước như mặt trời.</p>
            <h3>4. Hoa Cẩm Tú Cầu</h3>
            <p>Lòng biết ơn, sự chân thành, tình cảm sâu sắc. Tùy màu sắc có thể mang ý nghĩa khác nhau như tím cho sự lãng mạn, xanh cho sự thay đổi.</p>
            <h3>5. Hoa Tulip</h3>
            <p><strong>Tulip đỏ:</strong> Tình yêu hoàn hảo, sự công nhận.<br><strong>Tulip vàng:</strong> Niềm vui, sự hạnh phúc.<br><strong>Tulip tím:</strong> Sự vương giả, thịnh vượng.<br><strong>Tulip trắng:</strong> Lời xin lỗi, sự trong trắng.</p>
            <h3>6. Hoa Baby (Gypsophila)</h3>
            <p>Tình yêu vĩnh cửu, sự trong sáng, ngây thơ, vẻ đẹp của trẻ thơ. Thường được dùng làm hoa nền nhưng cũng rất đẹp khi đứng một mình.</p>
            <p>Việc lựa chọn đúng loài hoa với ý nghĩa phù hợp sẽ làm món quà của bạn thêm phần giá trị và đáng nhớ.</p>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Gọi hàm để cập nhật trạng thái đăng nhập trên header cho tất cả các trang
    updateAuthLinks();

    // =================================================================
    // **[CẬP NHẬT QUAN TRỌNG]** LOGIC CHO TRANG SẢN PHẨM (products.html)
    // =================================================================
    if (document.getElementById('product-list')) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryFromUrl = urlParams.get('category');

        if (categoryFromUrl) {
            // Nếu có category từ URL, lọc sản phẩm theo category đó
            const filteredProducts = products.filter(p => p.category.toLowerCase() === categoryFromUrl.toLowerCase());
            renderProducts(filteredProducts);
            // Đồng thời, set giá trị cho dropdown để người dùng biết đang lọc theo cái gì
            document.getElementById('category-filter').value = categoryFromUrl;
        } else {
            // Nếu không có, hiển thị tất cả sản phẩm
            renderProducts(products);
        }

        // Gắn các sự kiện lọc cho ô tìm kiếm và dropdown
        document.getElementById('search-input').addEventListener('input', filterProducts);
        document.getElementById('category-filter').addEventListener('change', filterProducts);
    }
    // =================================================================
    // KẾT THÚC CẬP NHẬT
    // =================================================================

    // Functions for Product Detail Page
    if (document.getElementById('product-detail-container')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (productId) {
            renderProductDetail(productId);
            renderRelatedProducts(productId);
        }
    }

    // Functions for Cart Page
    if (document.getElementById('cart-page-layout') || document.getElementById('empty-cart-message')) { // Check both to ensure logic runs
        renderCart();
    }

    // Functions for Login Page
    if (document.getElementById('login-form')) {
        document.getElementById('login-form').addEventListener('submit', handleLogin);
    }

    // Functions for Register Page
    if (document.getElementById('register-form')) {
        document.getElementById('register-form').addEventListener('submit', handleRegister);
    }

    // Functions for Profile Page
    if (document.getElementById('profile-content')) {
        renderProfile();
    }

    // Function for News Detail Page
    if (document.getElementById('news-detail-content')) {
        const urlParams = new URLSearchParams(window.location.search);
        const newsId = urlParams.get('id');
        if (newsId) {
            renderNewsDetail(newsId);
        }
    }

    // For index.html, if it exists and needs dynamic products/news
    if (document.getElementById('latest-products')) {
        renderLatestProducts();
    }
    if (document.getElementById('latest-news')) {
        renderLatestNews();
    }
});

// --- Common Functions ---
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to update login/logout/profile links in header
function updateAuthLinks() {
    const authLinksDiv = document.getElementById('auth-links');
    if (!authLinksDiv) return;

    const loggedInUserEmail = localStorage.getItem('loggedInUser'); // Lấy email người dùng đang đăng nhập
    const users = getUsers();
    const currentUser = users.find(user => user.email === loggedInUserEmail);

    if (currentUser) {
        authLinksDiv.innerHTML = `
            <a href="profile.html"><i class="fas fa-user-circle"></i> Chào, ${currentUser.name || 'Bạn'}</a>
            <a href="#" id="logout-link"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
        `;
        document.getElementById('logout-link').addEventListener('click', handleLogout);
    } else {
        authLinksDiv.innerHTML = `
            <a href="login.html"><i class="fas fa-sign-in-alt"></i> Đăng nhập</a>
            <a href="register.html"><i class="fas fa-user-plus"></i> Đăng ký</a>
        `;
    }
}

// --- Product Listing Page Functions ---
function renderProducts(filteredProducts) {
    const productListDiv = document.getElementById('product-list');
    if (!productListDiv) return;

    productListDiv.innerHTML = '';
    if (filteredProducts.length === 0) {
        productListDiv.innerHTML = '<p style="text-align: center; width: 100%;">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString('vi-VN')} VNĐ</p>
            <div class="product-actions">
                <button class="button" onclick="addToCart('${product.id}')">Mua ngay</button>
                <a href="product-detail.html?id=${product.id}" class="button" style="background-color: #6c757d;">Xem chi tiết</a>
            </div>
        `;
        productListDiv.appendChild(productItem);
    });
}

function filterProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;

    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchInput);
        const matchesCategory = categoryFilter === 'all' || product.category.toLowerCase() === categoryFilter.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

// --- Product Detail Page Functions ---
function renderProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        document.getElementById('product-detail-container').innerHTML = '<p>Sản phẩm không tìm thấy.</p>';
        return;
    }

    const detailContainer = document.getElementById('product-detail-container');
    detailContainer.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <p class="price">${product.price.toLocaleString('vi-VN')} VNĐ</p>
            <p class="description">${product.description}</p>
            <button class="button" onclick="addToCart('${product.id}')">Thêm vào giỏ hàng</button>
        </div>
    `;
    document.title = product.name + ' - Cửa hàng hoa tươi';
}

function renderRelatedProducts(currentProductId) {
    const relatedProductsDiv = document.getElementById('related-products-list');
    if (!relatedProductsDiv) return;

    const currentProduct = products.find(p => p.id === currentProductId);
    if (!currentProduct) return;

    const related = products.filter(p => p.category === currentProduct.category && p.id !== currentProductId).slice(0, 4);

    if (related.length === 0) {
        document.getElementById('related-products').style.display = 'none';
        return;
    } else {
        document.getElementById('related-products').style.display = 'block';
    }

    relatedProductsDiv.innerHTML = '';
    related.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString('vi-VN')} VNĐ</p>
            <div class="product-actions">
                <button class="button" onclick="addToCart('${product.id}')">Mua ngay</button>
                <a href="product-detail.html?id=${product.id}" class="button" style="background-color: #6c757d;">Xem chi tiết</a>
            </div>
        `;
        relatedProductsDiv.appendChild(productItem);
    });
}

function addToCart(productId) {
    // **[ĐÃ CẬP NHẬT]** KIỂM TRA ĐĂNG NHẬP TRƯỚC KHI THÊM VÀO GIỎ
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (!loggedInUserEmail) {
        alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.');
        window.location.href = 'login.html';
        return; // Dừng hàm tại đây nếu chưa đăng nhập
    }

    let cart = getCart();
    const product = products.find(p => p.id === productId);

    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart(cart);
        alert('Đã thêm sản phẩm vào giỏ hàng!');
    }
}

// --- Cart Page Functions ---
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    const summaryItemCountSpan = document.getElementById('summary-item-count');
    const emptyCartMessageDiv = document.getElementById('empty-cart-message');
    const cartPageLayoutDiv = document.getElementById('cart-page-layout');

    let cart = getCart();
    let totalAmount = 0;
    let totalItems = 0;

    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessageDiv.style.display = 'block';
        cartPageLayoutDiv.style.display = 'none';
        cartTotalDiv.innerHTML = '0 VNĐ';
        summaryItemCountSpan.textContent = '0';
        return;
    } else {
        emptyCartMessageDiv.style.display = 'none';
        cartPageLayoutDiv.style.display = 'flex';
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        totalItems += item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item-modern';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p class="item-price">${item.price.toLocaleString('vi-VN')} VNĐ</p>
            </div>
            <div class="item-quantity-controls">
                <button onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <p class="item-total">${(itemTotal).toLocaleString('vi-VN')} VNĐ</p>
            <button class="remove-item-btn" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash-alt"></i></button>
        `;
        cartItemsDiv.appendChild(cartItem);
    });

    cartTotalDiv.innerHTML = `${totalAmount.toLocaleString('vi-VN')} VNĐ`;
    summaryItemCountSpan.textContent = totalItems;
}

function updateQuantity(productId, change) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        saveCart(cart);
        renderCart();
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

function checkout() {
    // **[ĐÃ CẬP NHẬT]** KIỂM TRA ĐĂNG NHẬP TRƯỚC KHI THANH TOÁN
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (!loggedInUserEmail) {
        alert('Vui lòng đăng nhập để tiến hành thanh toán.');
        window.location.href = 'login.html';
        return; // Dừng hàm nếu chưa đăng nhập
    }

    const cart = getCart();
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi gửi đơn hàng.');
        return;
    }
    
    alert('Đơn hàng của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
    localStorage.removeItem('cart');
    renderCart();
}


// --- User Account Functions ---

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const confirmPassword = document.getElementById('reg-confirm-password').value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ tất cả các trường.');
        return;
    }

    if (password.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 ký tự.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }

    let users = getUsers();
    if (users.find(user => user.email === email)) {
        alert('Email này đã được đăng ký! Vui lòng sử dụng email khác hoặc đăng nhập.');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);

    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    window.location.href = 'login.html';
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!email || !password) {
        alert('Vui lòng điền email và mật khẩu.');
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', user.email);
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html';
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
}

function handleLogout() {
    localStorage.removeItem('loggedInUser');
    alert('Bạn đã đăng xuất.');
    window.location.href = 'index.html';
}

function renderProfile() {
    const profileContentDiv = document.getElementById('profile-content');
    const loggedInUserEmail = localStorage.getItem('loggedInUser');

    if (!loggedInUserEmail) {
        profileContentDiv.innerHTML = '<p>Bạn cần <a href="login.html">đăng nhập</a> để xem trang cá nhân.</p>';
        return;
    }

    const users = getUsers();
    const currentUser = users.find(user => user.email === loggedInUserEmail);

    if (currentUser) {
        profileContentDiv.innerHTML = `
            <h2>Thông tin tài khoản</h2>
            <div class="profile-info">
                <p><strong><i class="fas fa-user"></i> Họ tên:</strong> <span>${currentUser.name}</span></p>
                <p><strong><i class="fas fa-envelope"></i> Email:</strong> <span>${currentUser.email}</span></p>
                </div>
            <div class="profile-actions">
                <button class="button" onclick="alert('Chức năng cập nhật thông tin chưa được triển khai đầy đủ.');"><i class="fas fa-edit"></i> Cập nhật thông tin</button>
                <button class="button" style="background-color: #dc3545;" onclick="alert('Chức năng đổi mật khẩu chưa được triển khai đầy đủ.');"><i class="fas fa-key"></i> Đổi mật khẩu</button>
            </div>
        `;
    } else {
        profileContentDiv.innerHTML = '<p>Không tìm thấy thông tin người dùng. Vui lòng đăng nhập lại.</p>';
        localStorage.removeItem('loggedInUser');
    }
}

// News Detail Page Functions
function renderNewsDetail(newsId) {
    const newsDetailContentDiv = document.getElementById('news-detail-content');
    if (!newsDetailContentDiv) return;

    const article = newsArticles.find(a => a.id === newsId);

    if (article) {
        newsDetailContentDiv.innerHTML = `
            <h1>${article.title}</h1>
            <span class="date">Ngày đăng: ${article.date}</span>
            <img src="${article.image}" alt="${article.title}">
            ${article.content}
        `;
        document.title = article.title + ' - Tin tức Flower Shop';
    } else {
        newsDetailContentDiv.innerHTML = '<p>Bài viết không tìm thấy.</p>';
        document.title = 'Bài viết không tìm thấy';
    }
}

// Functions for Index Page (if you have one and want to display dynamic content)
function renderLatestProducts() {
    const latestProductsDiv = document.getElementById('latest-products');
    if (!latestProductsDiv) return;

    const latest = products.slice(0, 4);

    latestProductsDiv.innerHTML = '';
    latest.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString('vi-VN')} VNĐ</p>
            <div class="product-actions">
                <button class="button" onclick="addToCart('${product.id}')">Mua ngay</button>
                <a href="product-detail.html?id=${product.id}" class="button" style="background-color: #6c757d;">Xem chi tiết</a>
            </div>
        `;
        latestProductsDiv.appendChild(productItem);
    });
}

function renderLatestNews() {
    const latestNewsDiv = document.getElementById('latest-news');
    if (!latestNewsDiv) return;

    const latest = newsArticles.slice(0, 3);

    latestNewsDiv.innerHTML = '';
    latest.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p class="date">${article.date}</p>
            <a href="news-detail.html?id=${article.id}" class="button button-small" style="background-color: #6c757d;">Đọc thêm</a>
        `;
        latestNewsDiv.appendChild(newsItem);
    });
}

// Handle Contact Form Submission
function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
        alert('Vui lòng điền họ tên, email và nội dung tin nhắn.');
        return;
    }

    console.log('Contact Form Data:', { name, email, subject, message });
    alert('Cảm ơn bạn đã liên hệ! Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi sớm nhất có thể.');

    event.target.reset();
}