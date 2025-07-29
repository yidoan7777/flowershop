// Sample product data
const products = [
    // --- CATEGORY: Valentine ---
    { 
        id: 'FL001', 
        name: 'Ecuadorian Red Rose Bouquet', 
        price: 450000, 
        image: 'img/Bó Hoa Hồng Đỏ Ecuador.jpg', 
        description: 'A powerful declaration of love conveyed through a bouquet of imported Ecuadorian red roses. Each flower boasts a superior size, thick, velvety petals, and impressive durability. The passionate red color symbolizes an intense, eternal love.', 
        category: 'Valentine' 
    },
    { 
        id: 'FL016', 
        name: 'Heart-Shaped Valentine Flower Box', 
        price: 650000, 
        image: 'img/Hộp Hoa Valentine Trái Tim.jpg', 
        description: 'A heart-shaped flower box with red roses and Ferrero Rocher chocolates, a romantic and sweet gift for your loved one.', 
        category: 'Valentine' 
    },
    { 
        id: 'FL017', 
        name: 'Gentle Pink Tulip Bouquet', 
        price: 580000, 
        image: 'img/Bó Hoa Tulip Hồng Dịu Dàng.jpg', 
        description: 'A bouquet of pastel pink tulips symbolizing a new, dreamy love and sincere care.', 
        category: 'Valentine' 
    },
    { 
        id: 'FL018', 
        name: 'Teddy Bear and Soap Roses', 
        price: 490000, 
        image: 'img/Gấu Bông và Hoa Hồng Sáp.jpg', 
        description: 'A lovely combination of a cute teddy bear and fragrant, eternal soap roses, a gift that lasts forever.', 
        category: 'Valentine' 
    },
    { 
        id: 'FL019', 
        name: 'Mixed Love Bouquet', 
        price: 520000, 
        image: 'img/Bó Hoa Mix Tình Yêu.jpg', 
        description: 'A bouquet combining various flowers in shades of red and pink, conveying a message of colorful and passionate love.', 
        category: 'Valentine' 
    },

    // --- CATEGORY: Grand Opening ---
    { 
        id: 'FL002', 
        name: 'White Phalaenopsis Orchid Arrangement', 
        price: 850000, 
        image: 'img/Lẵng Hoa Lan Hồ Điệp Trắng.jpg', 
        description: 'A pristine white Phalaenopsis orchid arrangement, symbolizing elegance, sophistication, and prosperity. Suitable as a grand opening gift.', 
        category: 'Grand Opening' 
    },
    { 
        id: 'FL004', 
        name: 'Sunflower & Yellow Lily Stand', 
        price: 700000, 
        image: 'img/Kệ Hoa Hướng Dương & Ly Vàng.jpg', 
        description: 'A flower stand combining vibrant sunflowers and elegant yellow lilies. It signifies congratulations on success and prosperity.', 
        category: 'Grand Opening' 
    },
    { 
        id: 'FL020', 
        name: 'Anthurium Prosperity Stand', 
        price: 950000, 
        image: 'img/Kệ Hoa Hồng Môn Phát Lộc.jpg', 
        description: 'A grand opening flower stand with bright red anthuriums, symbolizing luck, prosperity, and wealth for the owner.', 
        category: 'Grand Opening' 
    },
    { 
        id: 'FL021', 
        name: 'Vibrant Gerbera Daisy Stand', 
        price: 750000, 
        image: 'img/Kệ Hoa Đồng Tiền Rực Rỡ.jpg', 
        description: 'A flower stand with the bright colors of gerbera daisies, representing wealth, luck, and a favorable start.', 
        category: 'Grand Opening' 
    },
    { 
        id: 'FL022', 
        name: 'Lisianthus "As You Wish" Arrangement', 
        price: 880000, 
        image: 'img/Lẵng Hoa Cát Tường Như Ý.jpg', 
        description: 'A lisianthus arrangement with the meaning "may all your wishes come true," the best wish to send to a partner on their opening day.', 
        category: 'Grand Opening' 
    },

    // --- CATEGORY: Love ---
    { 
        id: 'FL003', 
        name: 'Pure White Baby\'s Breath Bouquet', 
        price: 320000, 
        image: 'img/Bó Hoa Baby Trắng Tinh Khôi.jpg', 
        description: 'Thousands of tiny white baby\'s breath flowers, representing innocent, pure, and everlasting love.', 
        category: 'Love' 
    },
    { 
        id: 'FL009', 
        name: 'Dreamy Purple Iris Bouquet', 
        price: 420000, 
        image: 'img/Bó Hoa Thủy Tiên Tím Mộng Mơ.jpg', 
        description: 'Graceful purple irises, expressing faithfulness and devotion. A wonderful gift for a lover or wife.', 
        category: 'Love' 
    },
    { 
        id: 'FL013', 
        name: 'Innocent Daisy Chrysanthemum Bouquet', 
        price: 280000, 
        image: 'img/Bó Hoa Cúc Họa Mi Trong Sáng.jpg', 
        description: 'Small, pristine white daisy chrysanthemums, symbolizing sincere love and purity.', 
        category: 'Love' 
    },
    { 
        id: 'FL023', 
        name: 'French Lavender Bouquet', 
        price: 480000, 
        image: 'img/Bó Hoa Lavender Pháp.jpg', 
        description: 'A bouquet of dried lavender from France, offering a relaxing fragrance and symbolizing a faithful, strong love.', 
        category: 'Love' 
    },
    { 
        id: 'FL024', 
        name: 'Everlasting Purple Statice Bouquet', 
        price: 350000, 
        image: 'img/Bó Hoa Salem Tím Vĩnh Cửu.jpg', 
        description: 'Statice flowers, with their non-fading characteristic, symbolize a lasting love and memories that never fade.', 
        category: 'Love' 
    },

    // --- CATEGORY: Birthday ---
    { 
        id: 'FL005', 
        name: 'Multicolor Dutch Tulip Bouquet', 
        price: 550000, 
        image: 'img/Bó Hoa Tulip Hà Lan Đa Sắc.jpg', 
        description: 'Imported tulips from Holland with various fresh colors, creating a bouquet full of emotion and romance.', 
        category: 'Birthday' 
    },
    { 
        id: 'FL025', 
        name: 'Congratulatory Sunflower Bouquet', 
        price: 450000, 
        image: 'img/Bó Hoa Hướng Dương Chúc Mừng.jpg', 
        description: 'A radiant sunflower bouquet, sending wishes for a new year of life full of joy, optimism, and looking towards good things.', 
        category: 'Birthday' 
    },
    { 
        id: 'FL026', 
        name: 'Elegant Birthday Flower Box', 
        price: 720000, 
        image: 'img/Hộp Hoa Sinh Nhật Sang Trọng.jpg', 
        description: 'An exquisitely designed flower box with premium flowers, making it a classy and surprising birthday gift.', 
        category: 'Birthday' 
    },
    { 
        id: 'FL027', 
        name: 'Cheerful Carnation Bouquet', 
        price: 380000, 
        image: 'img/Bó Hoa Cẩm Chướng Tươi Vui.jpg', 
        description: 'Carnations with many vibrant colors, bringing a cheerful atmosphere and wishes for health and happiness on a birthday.', 
        category: 'Birthday' 
    },
    { 
        id: 'FL028', 
        name: 'Fruit and Fresh Flower Basket', 
        price: 690000, 
        image: 'img/Lẵng Hoa Quả và Hoa Tươi.jpg', 
        description: 'A unique combination of fresh flowers and imported fruits, a birthday gift that is both beautiful and practical.', 
        category: 'Birthday' 
    },

    // --- CATEGORY: Gratitude ---
    { 
        id: 'FL006', 
        name: 'Blue Hydrangea Pot', 
        price: 380000, 
        image: 'img/Chậu Cẩm Tú Cầu Xanh Lam.jpg', 
        description: 'A cool blue hydrangea pot, symbolizing deep gratitude and understanding. A meaningful gift for mothers and teachers.', 
        category: 'Gratitude' 
    },
    { 
        id: 'FL029', 
        name: 'Grateful Yellow Lily Bouquet', 
        price: 460000, 
        image: 'img/Bó Hoa Ly Vàng Biết Ơn.jpg', 
        description: 'A fragrant yellow lily bouquet, expressing respect and sincere gratitude to those who have helped you.', 
        category: 'Gratitude' 
    },
    { 
        id: 'FL030', 
        name: 'Pink Carnation Basket', 
        price: 500000, 
        image: 'img/Giỏ Hoa Cẩm Chướng Hồng.jpg', 
        description: 'A basket of pink carnations symbolizing a mother\'s love, gratitude, and admiration. Suitable for gifting to mothers and teachers.', 
        category: 'Gratitude' 
    },
    { 
        id: 'FL031', 
        name: 'Respectful Sunflower Bouquet', 
        price: 430000, 
        image: 'img/Bó Hoa Hướng Dương Tôn Kính.jpg', 
        description: 'Sunflowers always turn towards the sun, like a heart always turning towards parents and teachers with infinite respect.', 
        category: 'Gratitude' 
    },
    { 
        id: 'FL032', 
        name: 'Purple Phalaenopsis Orchid Pot', 
        price: 750000, 
        image: 'img/Chậu Lan Hồ Điệp Tím.jpg', 
        description: 'An elegant purple Phalaenopsis orchid pot, expressing admiration and respect, a high-class gift of gratitude.', 
        category: 'Gratitude' 
    },
    
    // --- CATEGORY: Gifts ---
    { 
        id: 'FL008', 
        name: 'Lucky Red Anthurium', 
        price: 300000, 
        image: 'img/Hoa Hồng Môn Đỏ May Mắn.jpg', 
        description: 'A pot of Anthurium with a red heart-shaped flower, a symbol of luck, wealth, and hospitality.', 
        category: 'Gifts' 
    },
    { 
        id: 'FL036', 
        name: 'Fresh Flower and Scented Candle Gift Box', 
        price: 550000, 
        image: 'img/Hộp Quà Hoa Tươi và Nến Thơm.jpg', 
        description: 'A gift box combining fresh flowers and a premium scented candle, a sophisticated gift that helps relax the mind.', 
        category: 'Gifts' 
    },
    { 
        id: 'FL037', 
        name: 'Decorative Artificial Flower Vase', 
        price: 450000, 
        image: 'img/Bình Hoa Giả Trang Trí.jpg', 
        description: 'A high-quality silk flower vase, as beautiful as real flowers and timeless, making it a wonderful decorative gift.', 
        category: 'Gifts' 
    },
    { 
        id: 'FL038', 
        name: 'ZZ Plant for Wealth', 
        price: 280000, 
        image: 'img/Cây Kim Tiền Tài Lộc.jpg', 
        description: 'A pot of ZZ plant (Zamioculcas zamiifolia), a feng shui gift that means attracting wealth and luck to the recipient.', 
        category: 'Gifts' 
    },
    { 
        id: 'FL039', 
        name: 'Imported Fruit Gift Basket', 
        price: 900000, 
        image: 'img/Giỏ Quà Trái Cây Nhập Khẩu.jpg', 
        description: 'A gift basket of fresh imported fruits, a meaningful and luxurious health gift.', 
        category: 'Gifts' 
    },
    
    // --- CATEGORY: Special ---
    { 
        id: 'FL011', 
        name: 'Red Winter Cherry Blossom Box', 
        price: 900000, 
        image: 'img/Hộp Hoa Hoa Đào Đông Đỏ.jpg', 
        description: 'A box of imported winter cherry blossoms in a vibrant red, symbolizing abundance, luck, and wealth for the New Year.', 
        category: 'Special' 
    },
    { 
        id: 'FL044', 
        name: 'Eternal Blue Rose', 
        price: 350000, 
        image: 'img/Hoa Hồng Xanh Dương Vĩnh Cửu.jpg', 
        description: 'A blue rose preserved with special technology, symbolizing eternal love and the impossible.', 
        category: 'Special' 
    },
    { 
        id: 'FL045', 
        name: 'Rainbow Rose Bouquet', 
        price: 750000, 
        image: 'img/Bó Hoa Cầu Vồng (Rainbow Rose).jpg', 
        description: 'A bouquet of roses uniquely dyed with rainbow colors, bringing surprise and a message of a colorful, joyful love.', 
        category: 'Special' 
    },
    { 
        id: 'FL046', 
        name: 'Climbing Rose', 
        price: 800000, 
        image: 'img/hoa hong leo.jpg', 
        description: 'A climbing rose, a premium, luxurious gift with an everlasting meaning.', 
        category: 'Special' 
    },
    { 
        id: 'FL047', 
        name: 'Wild Apricot Blossom Pot', 
        price: 1100000, 
        image: 'img/Chậu Tuyết Mai Rừng.jpg', 
        description: 'A pot of wild apricot blossoms with small, pure white flowers, bringing an elegant, noble beauty for the New Year.', 
        category: 'Special' 
    },
    
    // --- CATEGORY: Condolences ---
    { 
        id: 'FL010', 
        name: 'White and Purple Condolence Arrangement', 
        price: 650000, 
        image: 'img/Lẵng Hoa Chia Buồn Trắng Tím.jpg', 
        description: 'A solemn funeral arrangement with white lilies, white chrysanthemums, and purple orchids, sending deep sympathy and condolences.', 
        category: 'Condolences' 
    },
    { 
        id: 'FL040', 
        name: 'Pure White Condolence Stand', 
        price: 1200000, 
        image: 'img/Kệ Hoa Chia Buồn Trắng Thuần Khiết.jpg', 
        description: 'A flower stand with a dominant white tone from lilies, chrysanthemums, and orchids, expressing purity and prayers for the deceased.', 
        category: 'Condolences' 
    },
    { 
        id: 'FL041', 
        name: 'Endless Yellow Lily Wreath', 
        price: 800000, 
        image: 'img/Vòng Hoa Ly Vàng Vô Cực.jpg', 
        description: 'A wreath with yellow lilies and chrysanthemums, sending condolences and treasuring past memories.', 
        category: 'Condolences' 
    },
    { 
        id: 'FL042', 
        name: 'White Chrysanthemum Farewell Arrangement', 
        price: 700000, 
        image: 'img/Lẵng Hoa Cúc Trắng Tiễn Biệt.jpg', 
        description: 'A white chrysanthemum arrangement signifying rebirth and filial piety, a serene and solemn farewell.', 
        category: 'Condolences' 
    },
    { 
        id: 'FL043', 
        name: 'White Lily Condolence Bouquet', 
        price: 450000, 
        image: 'img/Bó Hoa Ly Trắng Chia Buồn.jpg', 
        description: 'A simple yet solemn white lily bouquet, suitable for individual visits to express respect.', 
        category: 'Condolences' 
    },
    
    // --- CATEGORY: Decorative ---
    { 
        id: 'FL014', 
        name: 'Multicolor Dahlia Vase', 
        price: 400000, 
        image: 'img/Bình Hoa Thược Dược Đa Sắc.jpg', 
        description: 'A dahlia vase with blooming flowers in fresh colors, suitable for home decoration, bringing a joyful atmosphere.', 
        category: 'Decorative' 
    },
    { 
        id: 'FL048', 
        name: 'Calla Lily Vase', 
        price: 350000, 
        image: 'img/Bình Hoa Loa Kèn (Huệ Tây).jpg', 
        description: 'A pristine white calla lily vase, bringing an elegant beauty and gentle fragrance, adorning the living space.', 
        category: 'Decorative' 
    },
    { 
        id: 'FL049', 
        name: 'Silk Peony Vase', 
        price: 550000, 
        image: 'img/Bình Hoa Mẫu Đơn Lụa.jpg', 
        description: 'A high-quality silk peony vase, bringing a royal, luxurious beauty that never fades.', 
        category: 'Decorative' 
    },
    { 
        id: 'FL050', 
        name: 'Hanging Periwinkle Basket', 
        price: 250000, 
        image: 'img/Giỏ Treo Hoa Dừa Cạn.jpg', 
        description: 'A vibrant, easy-to-care-for hanging periwinkle basket, suitable for decorating balconies and windows, bringing nature indoors.', 
        category: 'Decorative' 
    },
    { 
        id: 'FL051', 
        name: 'Decorative Wooden Lotus Vase', 
        price: 600000, 
        image: 'img/Bình Hoa Sen Gỗ Trang Trí.jpg', 
        description: 'A handcrafted wooden lotus vase, bringing a rustic, serene, and artistic beauty to a meditation space.', 
        category: 'Decorative' 
    },
];


// Sample data for news articles
const newsArticles = [
    {
        id: 'news1',
        title: '5 Best Flowers to Gift Your Loved One in Summer',
        image: 'img/5 loai hoa.jpg',
        date: 'July 15, 2025',
        content: `
            <h2>Top 5 Ideal Flowers to Gift Your Partner in Summer at Flower Shop</h2>
            <p>Summer, the season of bright sunny days, trips, and endless romantic moments. Amidst this atmosphere, a fresh bouquet of flowers will be the perfect catalyst to express love, turning ordinary days into something truly special. If you are looking for a meaningful summer gift for your beloved, let's explore the 5 most ideal flowers currently available at our store.</p>
            <hr>
            <h3>1. Sunflower - The Sunshine of Love</h3>
            <p>No flower represents summer more clearly than the sunflower. With its radiant yellow color, always reaching for the sun, the sunflower is a symbol of optimism, faith, and a loyal, warm love. Gifting a sunflower bouquet is like telling them: "You are the sun in my life."</p>
            <p><strong>At Flower Shop, check out:</strong> <a href="product-detail.html?id=FL025">Congratulatory Sunflower Bouquet (FL025)</a></p>
            
            <h3>2. Hydrangea - Sincere and Dreamy</h3>
            <p>With its full, round clusters and gentle colors, the hydrangea exudes a dreamy and romantic beauty. This flower symbolizes deep gratitude and sincere understanding from the heart. A cool blue hydrangea pot will be a sophisticated gift, bringing a sense of peace and relaxation to the recipient on hot summer days.</p>
            <p><strong>At Flower Shop, check out:</strong> <a href="product-detail.html?id=FL006">Blue Hydrangea Pot (FL006)</a></p>

            <h3>3. Baby's Breath - Pure and Everlasting Love</h3>
            <p>Tiny, white baby's breath flowers, like thousands of little stars, create a soft, cloud-like bouquet. Baby's breath represents a pure, innocent, and everlasting love. It is the perfect choice for couples who appreciate subtlety and elegance. The unique sea-blue version will be a delightful surprise.</p>
            <p><strong>At Flower Shop, check out:</strong> <a href="product-detail.html?id=FL003">Pure White Baby's Breath Bouquet (FL003)</a> or <a href="product-detail.html?id=FL012">Unique Sea Blue Baby's Breath Bouquet (FL012)</a></p>

            <h3>4. Daisy Chrysanthemum - Simple Charm</h3>
            <p>The daisy chrysanthemum has a rustic, simple yet captivating beauty. The small flowers with yellow centers and pristine white petals are a symbol of a sincere love, unpretentious but incredibly strong. A bouquet of daisies will bring a fresh, pure feeling, just like your love story.</p>
            <p><strong>At Flower Shop, check out:</strong> <a href="product-detail.html?id=FL013">Innocent Daisy Chrysanthemum Bouquet (FL013)</a></p>

            <h3>5. Lavender - Faithfulness and Peace</h3>
            <p>Associated with the vast purple fields of France, lavender not only has a relaxing aroma but is also a symbol of faithfulness and devotion. By gifting a bouquet of dried lavender, you are sending a promise of a lasting love, walking together through peaceful years. This is a unique gift that will stand the test of time.</p>
            <p><strong>At Flower Shop, check out:</strong> <a href="product-detail.html?id=FL023">French Lavender Bouquet (FL023)</a></p>
            <hr>
            <p>Each flower carries its own story and message. Hopefully, with these suggestions, you will find the perfect summer gift for your loved one. Visit our <a href="products.html?category=Love">Love Flowers</a> category to discover more wonderful choices!</p>
        `
    },
    {
        id: 'news2',
        title: 'Tips to Keep Fresh Flowers Lasting Longer at Home',
        image: 'img/chamsoc.jpg',
        date: 'July 10, 2025',
        content: `
            <p>Everyone wants the fresh bouquets they receive to maintain their beauty for as long as possible. Here are some simple tips to help your flowers last longer:</p>
            <h3>1. Trim the Stems Correctly</h3>
            <p>When you bring the flowers home, use a sharp knife or specialized scissors to cut the stems at a 45-degree angle under running water. This increases the surface area for water absorption and prevents air from entering the stems, which can cause blockages.</p>
            <h3>2. Remove Leaves Below the Waterline</h3>
            <p>Any leaves below the water level in the vase will rot, creating a breeding ground for bacteria that contaminates the water and shortens the life of the flowers. Be sure to remove all of them.</p>
            <h3>3. Use Flower Food Solution</h3>
            <p>Instead of just plain water, add a packet of specialized flower food to the vase. This solution provides sugar (to nourish the flowers), a bactericide, and a pH adjuster, helping the flowers absorb water more effectively.</p>
            <h3>4. Change Water and Clean the Vase Regularly</h3>
            <p>Change the water daily or every other day, and clean the vase thoroughly to remove bacteria. If you don't have flower food, you can make a homemade solution with a little sugar, white vinegar, or diluted bleach.</p>
            <h3>5. Place Flowers in a Suitable Location</h3>
            <p>Avoid placing flowers in direct sunlight, near heat-emitting electronics (like TVs, computers), or near ripening fruit (ripening fruit releases ethylene gas, which makes flowers wilt faster). A cool place, away from drafts, is ideal.</p>
            <h3>6. Lightly Mist the Petals</h3>
            <p>Some types of flowers appreciate a light misting on their petals to maintain humidity, especially on dry, hot days. However, avoid letting too much water sit on the petals, as this can cause rot.</p>
            <p>By applying these small tips, you can extend the beauty of your favorite bouquets!</p>
        `
    },
    {
        id: 'news3',
        title: 'The Meaning of Popular Flowers',
        image: 'img/ynghia.jpg',
        date: 'July 1, 2025',
        content: `
            <p>Each flower carries its own story and unique meaning. Understanding the language of flowers will help you convey the most subtle and appropriate messages to the recipient:</p>
            <h3>1. Roses</h3>
            <p><strong>Red Rose:</strong> Passionate, romantic, and deep love.<br><strong>White Rose:</strong> Pure, innocent love, a new beginning.<br><strong>Yellow Rose:</strong> Friendship, joy, jealousy (in some contexts).<br><strong>Pink Rose:</strong> Admiration, gratitude, gentleness.</p>
            <h3>2. Lilies</h3>
            <p><strong>White Lily:</strong> Purity, virtue, nobility.<br><strong>Yellow Lily:</strong> Gratitude, loyalty, prosperity.<br><strong>Pink Lily:</strong> Romantic love, admiration.</p>
            <h3>3. Sunflowers</h3>
            <p>Loyalty, longevity, faith, hope, and positive energy. Always facing forward like the sun.</p>
            <h3>4. Hydrangeas</h3>
            <p>Gratitude, sincerity, deep feelings. The meaning can vary with color, such as purple for romance and blue for change.</p>
            <h3>5. Tulips</h3>
            <p><strong>Red Tulip:</strong> Perfect love, acknowledgment.<br><strong>Yellow Tulip:</strong> Joy, happiness.<br><strong>Purple Tulip:</strong> Royalty, prosperity.<br><strong>White Tulip:</strong> Forgiveness, purity.</p>
            <h3>6. Baby's Breath (Gypsophila)</h3>
            <p>Everlasting love, purity, innocence, the beauty of childhood. Often used as a filler flower but is also beautiful on its own.</p>
            <p>Choosing the right flower with the appropriate meaning will make your gift even more valuable and memorable.</p>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Call function to update login status in the header for all pages
    updateAuthLinks();

    // =================================================================
    // **[IMPORTANT UPDATE]** LOGIC FOR THE PRODUCTS PAGE (products.html)
    // =================================================================
    if (document.getElementById('product-list')) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryFromUrl = urlParams.get('category');

        if (categoryFromUrl) {
            // If there's a category from the URL, filter products by that category
            const filteredProducts = products.filter(p => p.category.toLowerCase() === categoryFromUrl.toLowerCase());
            renderProducts(filteredProducts);
            // Also, set the dropdown value so the user knows what they're filtering by
            document.getElementById('category-filter').value = categoryFromUrl;
        } else {
            // If not, display all products
            renderProducts(products);
        }

        // Attach filter events to the search input and dropdown
        document.getElementById('search-input').addEventListener('input', filterProducts);
        document.getElementById('category-filter').addEventListener('change', filterProducts);
    }
    // =================================================================
    // END OF UPDATE
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

    const loggedInUserEmail = localStorage.getItem('loggedInUser'); // Get the email of the logged-in user
    const users = getUsers();
    const currentUser = users.find(user => user.email === loggedInUserEmail);

    if (currentUser) {
        authLinksDiv.innerHTML = `
            <a href="profile.html"><i class="fas fa-user-circle"></i> Welcome, ${currentUser.name || 'User'}</a>
            <a href="#" id="logout-link"><i class="fas fa-sign-out-alt"></i> Logout</a>
        `;
        document.getElementById('logout-link').addEventListener('click', handleLogout);
    } else {
        authLinksDiv.innerHTML = `
            <a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>
            <a href="register.html"><i class="fas fa-user-plus"></i> Register</a>
        `;
    }
}

// --- Product Listing Page Functions ---
function renderProducts(filteredProducts) {
    const productListDiv = document.getElementById('product-list');
    if (!productListDiv) return;

    productListDiv.innerHTML = '';
    if (filteredProducts.length === 0) {
        productListDiv.innerHTML = '<p style="text-align: center; width: 100%;">No products found.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString('en-US')} VND</p>
            <div class="product-actions">
                <button class="button" onclick="addToCart('${product.id}')">Buy Now</button>
                <a href="product-detail.html?id=${product.id}" class="button" style="background-color: #6c757d;">View Details</a>
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
        document.getElementById('product-detail-container').innerHTML = '<p>Product not found.</p>';
        return;
    }

    const detailContainer = document.getElementById('product-detail-container');
    detailContainer.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <p class="price">${product.price.toLocaleString('en-US')} VND</p>
            <p class="description">${product.description}</p>
            <button class="button" onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
    `;
    document.title = product.name + ' - Flower Shop';
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
            <p>${product.price.toLocaleString('en-US')} VND</p>
            <div class="product-actions">
                <button class="button" onclick="addToCart('${product.id}')">Buy Now</button>
                <a href="product-detail.html?id=${product.id}" class="button" style="background-color: #6c757d;">View Details</a>
            </div>
        `;
        relatedProductsDiv.appendChild(productItem);
    });
}

function addToCart(productId) {
    // **[UPDATED]** CHECK LOGIN BEFORE ADDING TO CART
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (!loggedInUserEmail) {
        alert('Please log in to add items to the cart.');
        window.location.href = 'login.html';
        return; // Stop the function here if not logged in
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
        alert('Product added to cart!');
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
        cartTotalDiv.innerHTML = '0 VND';
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
                <p class="item-price">${item.price.toLocaleString('en-US')} VND</p>
            </div>
            <div class="item-quantity-controls">
                <button onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <p class="item-total">${(itemTotal).toLocaleString('en-US')} VND</p>
            <button class="remove-item-btn" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash-alt"></i></button>
        `;
        cartItemsDiv.appendChild(cartItem);
    });

    cartTotalDiv.innerHTML = `${totalAmount.toLocaleString('en-US')} VND`;
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
    // **[UPDATED]** CHECK LOGIN BEFORE CHECKING OUT
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (!loggedInUserEmail) {
        alert('Please log in to proceed with checkout.');
        window.location.href = 'login.html';
        return; // Stop function if not logged in
    }

    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty. Please add products before placing an order.');
        return;
    }
    
    alert('Your order has been sent successfully! We will contact you soon.');
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
        alert('Please fill in all fields.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    let users = getUsers();
    if (users.find(user => user.email === email)) {
        alert('This email is already registered! Please use a different email or log in.');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);

    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!email || !password) {
        alert('Please enter your email and password.');
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', user.email);
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Incorrect email or password!');
    }
}

function handleLogout() {
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.href = 'index.html';
}

function renderProfile() {
    const profileContentDiv = document.getElementById('profile-content');
    const loggedInUserEmail = localStorage.getItem('loggedInUser');

    if (!loggedInUserEmail) {
        profileContentDiv.innerHTML = '<p>You need to <a href="login.html">log in</a> to view your profile.</p>';
        return;
    }

    const users = getUsers();
    const currentUser = users.find(user => user.email === loggedInUserEmail);

    if (currentUser) {
        profileContentDiv.innerHTML = `
            <h2>Account Information</h2>
            <div class="profile-info">
                <p><strong><i class="fas fa-user"></i> Full Name:</strong> <span>${currentUser.name}</span></p>
                <p><strong><i class="fas fa-envelope"></i> Email:</strong> <span>${currentUser.email}</span></p>
                </div>
            <div class="profile-actions">
                <button class="button" onclick="alert('Update information feature is not fully implemented yet.');"><i class="fas fa-edit"></i> Update Information</button>
                <button class="button" style="background-color: #dc3545;" onclick="alert('Change password feature is not fully implemented yet.');"><i class="fas fa-key"></i> Change Password</button>
            </div>
        `;
    } else {
        profileContentDiv.innerHTML = '<p>User information not found. Please log in again.</p>';
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
            <span class="date">Posted on: ${article.date}</span>
            <img src="${article.image}" alt="${article.title}">
            ${article.content}
        `;
        document.title = article.title + ' - Flower Shop News';
    } else {
        newsDetailContentDiv.innerHTML = '<p>Article not found.</p>';
        document.title = 'Article Not Found';
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
            <p>${product.price.toLocaleString('en-US')} VND</p>
            <div class="product-actions">
                <button class="button" onclick="addToCart('${product.id}')">Buy Now</button>
                <a href="product-detail.html?id=${product.id}" class="button" style="background-color: #6c757d;">View Details</a>
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
            <a href="news-detail.html?id=${article.id}" class="button button-small" style="background-color: #6c757d;">Read More</a>
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
        alert('Please fill in your name, email, and message.');
        return;
    }

    console.log('Contact Form Data:', { name, email, subject, message });
    alert('Thank you for contacting us! Your message has been sent successfully. We will respond as soon as possible.');

    event.target.reset();
}