# VPNly — Top VPN Services 2026

VPNly là homepage theo phong cách editorial dành cho việc so sánh các dịch vụ VPN tốt nhất năm 2026. Website được thiết kế cho người dùng quốc tế, giúp người dùng hiểu rõ các lựa chọn, so sánh tính năng và chọn gói VPN phù hợp.


## Liên kết

- **Live demo:** https://top-vpn-services.netlify.app/
- **Source code:** https://github.com/TranChinh2901

## Mục tiêu sản phẩm

Các dịch vụ VPN thường khó so sánh vì mỗi nhà cung cấp sử dụng cách gọi tính năng, cách tính giá và thông điệp marketing khác nhau. VPNly giải quyết vấn đề này bằng một hành trình rõ ràng:

1. Tạo niềm tin thông qua methodology và các tín hiệu kiểm thử.
2. Giúp người dùng nhanh chóng xem các VPN được đánh giá cao.
3. Cho phép so sánh các tính năng quan trọng side-by-side.
4. Hướng người dùng đến gói VPN phù hợp thông qua CTA rõ ràng.

Homepage được xây dựng giống một sản phẩm review thực tế, không chỉ là một landing page quảng cáo.

## UI Research

Mình tham khảo các website VPN và cybersecurity phổ biến để nghiên cứu cách họ xây dựng trust, hierarchy, CTA và trải nghiệm so sánh. Mục đích là học hỏi pattern tốt, không sao chép một giao diện cụ thể.

### 1. NordVPN

Tham khảo: [nordvpn.com](https://nordvpn.com/)

**Điểm mạnh**

- Sử dụng ngôn ngữ hình ảnh tập trung vào security và privacy.
- Truyền tải value proposition rõ ràng.
- Đặt lợi ích sản phẩm và trust signals gần các điểm chuyển đổi.
- Có nhiều tính năng nhưng vẫn phân chia nội dung dễ hiểu.

**Điểm áp dụng vào VPNly**

VPNly sử dụng navy và blue làm nền tảng thị giác để tạo cảm giác tin cậy, bảo mật và công nghệ. Các thông tin kỹ thuật được gom vào những section riêng để người dùng không bị quá tải ngay từ đầu.

### 2. ExpressVPN

Tham khảo: [expressvpn.com](https://www.expressvpn.com/)

**Điểm mạnh**

- Visual hierarchy rõ ràng.
- CTA chính dễ nhận biết.
- Sử dụng ngôn ngữ đơn giản, phù hợp với người mới.
- Cân bằng giữa hình ảnh premium và thông tin thực tế.

**Điểm áp dụng vào VPNly**

Hero của VPNly sử dụng một thông điệp ngắn, một CTA chính và các trust signals ngay bên dưới. Ranking cards cũng chỉ hiển thị các thông tin quan trọng để người dùng dễ scan.

### 3. Surfshark

Tham khảo: [surfshark.com](https://surfshark.com/)

**Điểm mạnh**

- Truyền tải value proposition tốt.
- Nội dung hướng vào lợi ích người dùng.
- Navigation và product categories dễ hiểu.
- Sử dụng card layout hiệu quả cho việc discovery và comparison.

**Điểm áp dụng vào VPNly**

VPNly sử dụng card cho ranking, buying guides và editorial content. Người dùng có thể bắt đầu từ nhu cầu như streaming, privacy hoặc travel trước khi chọn một sản phẩm cụ thể.

## Design System

### Màu sắc

| Token | Giá trị | Mục đích |
| --- | --- | --- |
| Ink navy | `#12213B` | Text chính, navigation và nền tối |
| Brand blue | `#2F6BFF` | CTA chính, link và active state |
| Soft blue | `#F4F7FC` | Methodology và các section phụ |
| Cream | `#FAF9F5` | Editorial background |
| Success green | `#17A673` | Security state, check và positive signal |
| Border | `#E4E9F0` | Border card và table |

Bảng màu được giữ ở mức tiết chế. Navy và blue tạo cảm giác tin cậy, green chỉ dùng cho trạng thái tích cực hoặc bảo mật. Website không lạm dụng gradient.

### Typography

- **Heading:** Plus Jakarta Sans.
- **Body:** DM Sans.
- Heading có tính editorial nhưng vẫn ưu tiên khả năng đọc.
- Body text được giữ rõ ràng, phù hợp với việc scan thông tin.
- Các text phụ được giới hạn tối thiểu khoảng 13px.

### Spacing và hình dạng

- Sử dụng spacing theo nhịp 8px.
- Card dùng border mảnh và border-radius khoảng 9–12px.
- Shadow chỉ dùng cho popup và floating UI.
- Button có độ tương phản rõ và trạng thái hover.

## Các section trong homepage

- **Header:** Điều hướng đến Best VPNs, How we rank, VPN guides và FAQ.
- **Hero:** Truyền tải thông điệp chính, CTA, update date và trust signal.
- **Trust stats:** Hiển thị các tín hiệu về số lượng VPN và speed tests.
- **VPN rankings:** Hiển thị top VPN, điểm số, giá, tính năng và CTA.
- **View deal modal:** Cho phép chọn Basic, Pro hoặc Pro Max.
- **Feature breakdown:** So sánh chi tiết các tính năng security và performance.
- **Methodology:** Giải thích cách VPNly đánh giá sản phẩm.
- **Buying guides:** Hướng người dùng theo nhu cầu streaming, privacy và travel.
- **Editorial guides:** Bổ sung nội dung giáo dục và tạo thêm điểm truy cập.
- **Reader voices:** Bổ sung social proof.
- **FAQ:** Trả lời các câu hỏi cơ bản về VPN.
- **Final CTA:** Tạo điểm chuyển đổi cuối trang.

## Quyết định UX và conversion

- Hero chỉ có một CTA chính: `See the top VPNs`.
- Ranking xuất hiện sớm để người dùng có thể hành động nhanh.
- Methodology được đặt gần comparison để tăng độ tin cậy.
- Comparison table dành cho người dùng cần kiểm tra kỹ trước khi click deal.
- CTA được dùng nhất quán về màu sắc và cách đặt tên.
- Final CTA xuất hiện sau khi người dùng đã đọc đủ thông tin.

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

`page.tsx` chỉ còn nhiệm vụ composition các section. `Header`, `HeroSection`, `RankingSection` và `ContentSections` chịu trách nhiệm từng nhóm UI riêng. `VpnCard` và `DealMenu` được quản lý trong `RankingSection`; `FeatureBreakdown` được tách riêng vì có data structure và UI logic phức tạp hơn. Dữ liệu VPN và các gói plan được tách khỏi UI trong `site-data.ts`, còn icon và Logo dùng chung nằm trong `ui.tsx`.

## Technical decisions

- Sử dụng Next.js App Router, React và TypeScript.
- Sử dụng CSS-first để giao diện nhẹ và dễ review.
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
- Tạo trang review riêng cho từng VPN.
- Thêm filter theo privacy, streaming, gaming, travel và price.
- Thêm affiliate tracking.
- Chạy automated performance và accessibility tests.
- Thực hiện usability testing với người mới dùng VPN.
- Hoàn thiện focus management cho modal.

## Chạy project local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Lưu ý khi nộp bài

Project tập trung vào chất lượng UI, research-informed design, conversion thinking và frontend implementation. Dữ liệu thương mại thật và affiliate integration nằm ngoài phạm vi của bài test.
