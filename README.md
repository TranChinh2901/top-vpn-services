
## Link demo / source code

- **Live demo:** https://top-vpn-services.netlify.app/
- **Source code:** https://github.com/TranChinh2901



## UI Research

Em tham khảo các website VPN và cybersecurity phổ biến để nghiên cứu trust, visual hierarchy, CTA và comparison. Mục đích là học hỏi pattern tốt, không sao chép một giao diện cụ thể.

### 1. NordVPN

Tham khảo: [nordvpn.com](https://nordvpn.com/)

**Điểm mạnh**

- Thiết kế chuyên nghiệp, tạo cảm giác an toàn và công nghệ. Trang định vị sản phẩm như một hệ sinh thái bảo mật gồm VPN, antivirus và Dark Web Monitor, thay vì chỉ là dịch vụ đổi IP.
- Màu sắc: Dùng nền xanh navy/xanh đậm làm màu chính, kết hợp trắng và xanh sáng để tạo tương phản. Màu tối truyền tải sự bảo mật, còn màu đỏ hướng mắt vào các nút hành động.
- Kiểu chữ (Typography) & hierarchy: Tiêu đề lớn, đậm, dễ quét. Nội dung được chia theo các nhóm “Connect –Protect – Monitor”, giúp người dùng hiểu lợi ích theo từng nhu cầu.
- Layout & spacing: Bố cục dạng landing page dài: hero → tính năng → lợi ích → số liệu → đánh giá → thiết bị → FAQ. Các hình ảnh giao diện app xen kẽ nội dung giúp trang bớt nhàm chán.
- CTA & điều hướng: “Get NordVPN” xuất hiện nhiều lần, đặc biệt ở hero và sau các section quan trọng. “30-day money-back guarantee” giúp giảm tâm lý e ngại khi mua.

**Điểm áp dụng vào VPNLY**

VPNLY sử dụng navy và blue để tạo cảm giác tin cậy, bảo mật và công nghệ. Thông tin kỹ thuật được gom vào section riêng để người dùng không bị quá tải ngay từ hero.

### 2. ExpressVPN

Tham khảo: [expressvpn.com](https://www.expressvpn.com/)

**Điểm mạnh**

- Mang cảm giác cao cấp, tập trung mạnh vào tốc độ, quyền riêng tư và độ tin cậy. 
- Màu sắc: Sử dụng nền sáng kết hợp các vùng màu tím/xanh đậm/đỏ và màu accent nổi bật cho CTA. Tổng thể tạo cảm giác hiện đại, premium và khác biệt so với giao diện cybersecurity thường dùng nền tối.
- Kiểu chữ (Typography) & hierarchy: Headline rất lớn và trực tiếp, ví dụ “World’s #1 VPN”. Thông tin được phâncấp theo thứ tự: ưu đãi → bằng chứng → tính năng → lợi ích → giải thích VPN.
- Layout & spacing: Bố cục thoáng, nhiều khoảng trắng và các section card rõ ràng. Phần “Why ExpressVPN?” trình bày các ưu điểm như 113 quốc gia, không lưu hoạt động, hỗ trợ nhiều thiết bị dưới dạng các điểm ngắn dễ đọc.
- CTA & điều hướng: CTA “Get the Deal Now” được đặt ngay hero và gắn với giá ưu đãi, dễ dang tiếp cận tiếp là phần “Get ExpressVPN” được lặp lại nhiều lần ở những vị trí quan trọng dễ thao tác. Navigation rất đầy đủ, bao gồm tính năng, tải ứng dụng, tài nguyên, hỗ trợ và sản phẩm khác.

**Điểm áp dụng vào VPNLY**

Khu vực giới thiệu chính (Hero) có một thông điệp ngắn, một CTA chính và trust signals ngay bên dưới. Ranking cards chỉ hiển thị các thông tin quan trọng để người dùng dễ scan.


## Design System

### Màu sắc

| màu sắc | Mã màu | Dùng cho |
| --- | --- | --- |
| Ink navy | `#12213B` | Text chính, navigation và nền tối |
| Brand blue | `#2F6BFF` | CTA chính, link và active state |
| Soft blue | `#F4F7FC` | Methodology và các section phụ |
| Cream | `#FAF9F5` | Editorial background |
| Success green | `#17A673` | Security state, check và positive signal |
| Border | `#E4E9F0` | Border card và table |


### Khoảng cách và thành phần giao diện

- **Heading:** Font chữ Plus Jakarta Sans - hiện đại, chắc chắn, gọn gàng.
- **Body:** Font chữ DM Sans.
- Tiêu đề có hierarchy rõ ràng và letter spacing được kiểm soát.
- Text phụ được giữ ở kích thước dễ đọc, tránh sử dụng chữ quá nhỏ.

### Khoảng cách và thành phần giao diện

- Card dùng border mảnh (mỏng nhẹ) và border-radius khoảng 9–12px.
- Shadow chỉ dùng cho popup và floating UI.
- Button có độ tương phản rõ và trạng thái hover.

## Mô tả trang chủ 

- **Header:** Điều hướng đến Best VPNs, How we rank, VPN guides, FAQ và CTA Compare VPNs.
- **Hero:** Truyền tải thông điệp chính, CTA, update date và trust signal.
- **Trust stats:** Hiển thị các tín hiệu về số lượng VPN và speed tests.
- **VPN rankings:** Thứ hạng, giá, danh sách tính năng, khi click vào “View deal” thì sẽ show những option (Basic, Pro và Pro Max).
- **View deal modal:** Cho phép chọn Basic, Pro hoặc Pro Max.
- **Feature breakdown:** So sánh chi tiết các tính năng security và performance.
- **Methodology:** Giải thích cách VPNLY đánh giá sản phẩm.
- **Buying guides:** Hướng người dùng theo nhu cầu streaming, privacy và travel.
- **Editorial guides:** Các bài viết về kiến thức VPN, xem nội dung trực tuyến và du lịch.
- **Reader voices:** Bổ sung social proof.
- **FAQ:** Trả lời các câu hỏi cơ bản về VPN.
- **Final CTA:** Tạo điểm chuyển đổi cuối trang.

## Quyết định Trải nghiệm người dùng và chuyển đổi (UX & Conversion)

- Khu vực giới thiệu chính (Hero) chỉ có một CTA chính: See the top VPNs, tránh phân tán chú ý.
- Ranking xuất hiện sớm để người dùng xem sản phẩm ngay.
- Phương pháp đánh giá đặt gần comparison để tăng độ tin cậy.
- View deal mở plan selector Basic, Pro và Pro Max giá cả khác nhau.
- Show more VPNs giữ màn hình ban đầu gọn nhưng vẫn cho phép khám phá thêm.
- CTA cuối trang xuất hiện sau khi người dùng đã đọc đủ thông tin.

## Responsive strategy

- Header chuyển thành mobile menu.
- Hero và editorial layout chuyển từ 2 cột thành 1 cột.
- Ranking card mobile được chia thành các hàng riêng cho thông tin, giá và score.
- Text dài được phép wrap để không đè lên nội dung khác.
- Button có vùng click đủ lớn cho mobile.
- Floating cards trong hero tự co theo kích thước màn hình.
- Comparison table được tối ưu để không làm vỡ layout desktop/mobile.

## Component structure

```text
app/
├── layout.tsx
├── page.tsx
└── globals.css
components/
├── Header.tsx
├── HeroSection.tsx
├── RankingSection.tsx
├── ContentSections.tsx
├── FeatureBreakdown.tsx
├── site-data.ts
└── ui.tsx
```

- page.tsx chỉ còn nhiệm vụ composition các section.
- Header.tsx thanh đầu trang.
- HeroSection.tsx, RankingSection.tsx và ContentSections.tsx chịu trách nhiệm từng nhóm UI riêng. 
- FeatureBreakdown.tsx được tách riêng vì có data structure và UI logic phức tạp hơn.
- site-data.ts chứa dữ liệu VPN và các gói plan được tách khỏi UI. 

## Technical decisions

- Sử dụng Next.js  và TypeScript.
- Sử dụng CSS để style.
- Dữ liệu VPN được tách thành typed arrays để có thể thay thế bằng API hoặc CMS.
- Deal modal sử dụng React state và portal để tránh lỗi stacking context, overflow.
- Development và production dùng thư mục build riêng để tránh lỗi stale webpack chunk.
- Homepage được static generate vì bài test không yêu cầu authentication, database hoặc backend API.

## Accessibility và chất lượng

- Sử dụng semantic section, button, link, table và details/summary khi phù hợp.
- Modal hỗ trợ đóng bằng nút close, click backdrop và phím Escape.
- Bảng dùng cả check/cross symbol, không chỉ phụ thuộc vào màu sắc.
- Màu chữ có độ tương phản tốt với nền.
- Production build đã pass TypeScript validation và static generation.

## Giới hạn hiện tại

- Giá, rating và feature comparison là dữ liệu minh họa cho bài test UI/UX.
- CTA chưa kết nối affiliate URL hoặc checkout thật.
- Newsletter hiện mới là giao diện, chưa kết nối backend.
- Chưa có CMS, authentication hoặc dữ liệu provider real-time.

## Nếu có thêm thời gian

- Kết nối dữ liệu provider đã được kiểm chứng.
- Tạo trang chủ đầy đủ hơn có nhiều chi tiết hơn.  Ví dụ: Sẽ tạo những trang chi tiết cho VPN, blogs,...
- Thêm backend + database

