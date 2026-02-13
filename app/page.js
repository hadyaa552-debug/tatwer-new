'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`شكراً ${formData.name}!\n\nسيتم التواصل معك قريباً على:\n${formData.phone}`)
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <style jsx global>{`
        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 0.5rem 4rem;
        }
        
        .header-content {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 3rem;
          font-weight: 900;
          color: #333;
          font-family: Arial, sans-serif;
          position: relative;
        }
        
        .logo::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: -10px;
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
        }
        
        nav ul {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        
        nav a {
          text-decoration: none;
          color: #555;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s;
        }
        
        nav a:hover {
          color: var(--primary);
        }
        
        .header-phone {
          color: var(--primary);
          font-weight: 700;
          font-size: 1.1rem;
          direction: ltr;
        }
        
        /* Hero */
        .hero {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                      url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920') center/cover;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 4rem;
          padding: 7rem 4rem 3rem;
          color: white;
        }
        
        .hero-content {
          text-align: right;
          max-width: 100%;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        
        .brand {
          color: var(--primary);
          display: block;
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-top: 3rem;
          max-width: 700px;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-value {
          font-size: 4rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }
        
        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
          margin-top: 0.5rem;
          font-weight: 500;
        }
        
        /* Form */
        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        
        .contact-form h3 {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
          color: var(--dark);
          text-align: center;
          font-weight: 700;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #555;
          font-size: 0.9rem;
          text-align: right;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.9rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-family: 'Cairo', sans-serif;
          font-size: 0.95rem;
          background: #f9f9f9;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary);
          background: white;
        }
        
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.3s;
        }
        
        .submit-btn:hover {
          opacity: 0.9;
        }
        
        /* Sections */
        section {
          padding: 5rem 4rem;
          max-width: 100%;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 3rem;
          text-align: center;
        }
        
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .overview-image {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .highlight-card {
          background: var(--gray);
          padding: 1.5rem;
          border-radius: 15px;
          transition: transform 0.3s;
        }
        
        .highlight-card:hover {
          transform: translateY(-5px);
        }
        
        .highlight-card h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        
        /* Units */
        .units-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .unit-card {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s;
        }
        
        .unit-card:hover {
          border-color: var(--primary);
          transform: translateY(-10px);
        }
        
        .unit-type {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 1rem;
        }
        
        .unit-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
          margin: 1.5rem 0;
        }
        
        .unit-features {
          list-style: none;
          text-align: right;
          margin-top: 1.5rem;
        }
        
        .unit-features li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #e0e0e0;
        }
        
        /* Amenities */
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .amenity-card {
          text-align: center;
          padding: 2rem;
          background: var(--gray);
          border-radius: 15px;
          transition: transform 0.3s;
        }
        
        .amenity-card:hover {
          transform: scale(1.05);
        }
        
        .amenity-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        /* Payment */
        .payment-section {
          background: linear-gradient(135deg, var(--primary), #ff6b3d);
          color: white;
          border-radius: 0;
          padding: 4rem;
          text-align: center;
          margin: 0;
        }
        
        .payment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-top: 3rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .payment-feature h3 {
          font-size: 3rem;
        }
        
        /* Footer */
        footer {
          background: var(--dark);
          color: white;
          padding: 3rem 4rem 1rem;
          margin-top: 4rem;
        }
        
        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }
        
        .footer-section h3 {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
        }
        
        /* WhatsApp */
        .whatsapp-btn {
          position: fixed;
          bottom: 30px;
          left: 30px;
          background: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 5px 20px rgba(37, 211, 102, 0.4);
          z-index: 999;
          text-decoration: none;
        }
        
        /* Responsive */
        @media (max-width: 968px) {
          .header {
            padding: 0.5rem 1.5rem;
          }
          
          .hero {
            grid-template-columns: 1fr;
            padding: 5rem 1.5rem 2rem;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .brand {
            font-size: 3rem;
          }
          
          nav ul {
            display: none;
          }
          
          section {
            padding: 3rem 1.5rem;
          }
          
          .overview-grid,
          .payment-grid {
            grid-template-columns: 1fr;
          }
          
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">T.</div>
          <nav>
            <ul>
              <li><a href="#hero">المشروع</a></li>
              <li><a href="#overview">الموقع</a></li>
              <li><a href="#units">الوحدات</a></li>
              <li><a href="#amenities">المميزات</a></li>
              <li><a href="#payment">أنظمة السداد</a></li>
              <li><a href="#contact">تواصل معنا</a></li>
            </ul>
          </nav>
          <div className="header-phone">0102 4383 203</div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>
            <span className="brand">Il Monte Galala</span>
            المونت جلالة
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.95 }}>
            أبراج فندقية فاخرة - تطوير مصر
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.9, maxWidth: '650px' }}>
            لأول مرة على البحر الأحمر: أبراج سكنية على البحر مباشرة بارتفاع يصل لـ 22 دور على جبل الجلالة، العين السخنة. وحدات بتشطيب كامل وإطلالة بانورامية على البحر
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">10</div>
              <div className="stat-label">أبراج</div>
            </div>
            <div className="stat">
              <div className="stat-value">2028</div>
              <div className="stat-label">التسليم</div>
            </div>
            <div className="stat">
              <div className="stat-value">5%</div>
              <div className="stat-label">مقدم</div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>احجز استشارة</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>الاسم الكامل *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="" />
            </div>
            <div className="form-group">
              <label>رقم الهاتف * (20+ 456 123 7890)</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="" />
            </div>
            <div className="form-group">
              <label>البريد الإلكتروني (example@email.com)</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="" />
            </div>
            <div className="form-group">
              <label>نوع الوحدة *</label>
              <select name="unitType" style={{ width: '100%', padding: '0.9rem', border: '1px solid #ddd', borderRadius: '5px', fontFamily: 'Cairo, sans-serif', fontSize: '0.95rem', background: '#f9f9f9' }}>
                <option value="">اختر نوع الوحدة</option>
                <option value="studio">ستوديو</option>
                <option value="1br">غرفة نوم واحدة</option>
                <option value="2br">غرفتين نوم</option>
                <option value="3br">3 غرف نوم</option>
                <option value="penthouse">بنتهاوس</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">إرسال الطلب</button>
          </form>
        </div>
      </section>

      {/* Overview */}
      <section id="overview">
        <h2 className="section-title">نبذة عن المشروع</h2>
        <div className="overview-grid">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800" alt="IL Monte Galala" className="overview-image" />
          
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>IL Monte Galala - مشروع استثنائي</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#666' }}>
              <strong style={{ color: 'var(--primary)' }}>IL Monte Galala</strong> - مشروع غير مسبوق على البحر الأحمر! أول أبراج سكنية فندقية فاخرة على البحر مباشرة بارتفاع يصل لـ 22 دور على جبل الجلالة.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#666' }}>
              المشروع يضم فندق تحت إدارة <strong>Marriott International</strong>، Branded Residences، و Serviced Units بإدارة وخدمات فندقية عالمية.
            </p>
            
            <div className="highlights-grid">
              <div className="highlight-card">
                <h4>📍 الموقع</h4>
                <p>جبل الجلالة - العين السخنة - البحر الأحمر</p>
              </div>
              <div className="highlight-card">
                <h4>🏢 عدد الأبراج</h4>
                <p>10 أبراج فندقية فاخرة</p>
              </div>
              <div className="highlight-card">
                <h4>🏗️ المطور</h4>
                <p>تطوير مصر للتطوير العقاري</p>
              </div>
              <div className="highlight-card">
                <h4>📅 موعد التسليم</h4>
                <p>2028</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Units */}
      <section id="units">
        <h2 className="section-title">الوحدات المتاحة</h2>
        <div className="units-grid">
          {[
            { type: 'ستوديو', area: '60 م²', price: '10,000,000 جنيه', features: ['غرفة معيشة', 'حمام كامل', 'مطبخ', 'بلكونة بحرية', 'تشطيب فاخر'] },
            { type: 'غرفة نوم واحدة', area: '90 م²', price: '15,000,000 جنيه', features: ['غرفة نوم', 'غرفة معيشة', 'حمامين', 'مطبخ مجهز', 'إطلالة بانورامية'] },
            { type: 'غرفتين نوم', area: '140 م²', price: '22,000,000 جنيه', features: ['غرفتين نوم', 'غرفة معيشة', '2 حمام', 'مطبخ + طعام', 'تراس كبير'] },
            { type: 'بنتهاوس', area: '450 م²', price: '45,000,000 جنيه', features: ['3-4 غرف نوم', 'روف خاص', '3-4 حمام', 'غرفة خادمة', 'إطلالة 360'] }
          ].map((unit, i) => (
            <div key={i} className="unit-card">
              <div className="unit-type">{unit.type}</div>
              <div style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>{unit.area}</div>
              <div className="unit-price">{unit.price}</div>
              <ul className="unit-features">
                {unit.features.map((f, j) => <li key={j}>✓ {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities">
        <h2 className="section-title">المرافق والخدمات</h2>
        <div className="amenities-grid">
          {[
            { icon: '🏊', title: 'حمامات سباحة Infinity', desc: 'على البحر مباشرة' },
            { icon: '⛵', title: 'مارينا عالمية', desc: 'IGY Marina - 150+ يخت' },
            { icon: '🏋️', title: 'نادي رياضي', desc: 'أحدث المعدات' },
            { icon: '🍽️', title: 'مطاعم عالمية', desc: 'أفضل المطاعم والكافيهات' },
            { icon: '🏨', title: 'إدارة Marriott', desc: 'خدمات فندقية 5 نجوم' },
            { icon: '🛍️', title: 'منطقة تجارية', desc: 'محلات ومولات فاخرة' },
            { icon: '🔒', title: 'أمن وحراسة', desc: 'نظام أمن 24/7' },
            { icon: '🚶', title: 'ممشى سياحي', desc: '1 كم على البحر' }
          ].map((a, i) => (
            <div key={i} className="amenity-card">
              <div className="amenity-icon">{a.icon}</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment */}
      <section id="payment">
        <div className="payment-section">
          <h2 className="section-title" style={{ color: 'white' }}>أنظمة سداد مرنة</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>احجز وحدتك بأسهل نظام سداد</p>
          
          <div className="payment-grid">
            <div className="payment-feature">
              <h3>5%</h3>
              <p style={{ fontSize: '1.2rem' }}>مقدم حجز</p>
            </div>
            <div className="payment-feature">
              <h3>10 سنوات</h3>
              <p style={{ fontSize: '1.2rem' }}>تقسيط مريح</p>
            </div>
            <div className="payment-feature">
              <h3>2028</h3>
              <p style={{ fontSize: '1.2rem' }}>موعد التسليم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="section-title">تواصل معنا</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="contact-form">
            <h3>املأ النموذج وسنتواصل معك فوراً</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>الاسم *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="أدخل اسمك" />
              </div>
              <div className="form-group">
                <label>رقم الهاتف *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="01XXXXXXXXX" />
              </div>
              <div className="form-group">
                <label>البريد الإلكتروني</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" />
              </div>
              <div className="form-group">
                <label>رسالتك</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="اكتب استفسارك هنا..."></textarea>
              </div>
              <button type="submit" className="submit-btn">إرسال الاستفسار</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>IL Monte Galala</h3>
            <p>أول مشروع فندقي سكني فاخر على البحر الأحمر</p>
          </div>
          <div className="footer-section">
            <h3>روابط سريعة</h3>
            <a href="#hero" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>الرئيسية</a>
            <a href="#overview" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>المشروع</a>
            <a href="#units" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>الوحدات</a>
          </div>
          <div className="footer-section">
            <h3>تواصل معنا</h3>
            <p>📞 +20 XXX XXX XXXX</p>
            <p>📧 info@ilmontegalala.com</p>
            <p>📍 جبل الجلالة - العين السخنة</p>
          </div>
          <div className="footer-section">
            <h3>المطور</h3>
            <p><strong>تطوير مصر</strong></p>
            <p>إحدى الشركات الرائدة في التطوير العقاري</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 IL Monte Galala - تطوير مصر. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/201234567890?text=مرحباً، أريد الاستفسار عن IL Monte Galala" className="whatsapp-btn" target="_blank">
        💬
      </a>
    </>
  )
}
