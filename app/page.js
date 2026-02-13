'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/mpqjpoog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || 'استفسار عن IL Monte Galala'
        })
      })
      if (response.ok) {
        alert(`شكراً ${formData.name}! تم إرسال طلبك بنجاح.`)
        setFormData({ name: '', phone: '', email: '', message: '' })
      } else {
        alert('حدث خطأ في الإرسال')
      }
    } catch (error) {
      alert('حدث خطأ. تأكد من اتصالك بالإنترنت')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <style jsx global>{`
        :root { --primary: #ff5a2c; --dark: #1a1a1a; --gray: #f5f5f5; }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Cairo', sans-serif; }
        .header { position: fixed; top: 0; left: 0; right: 0; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); box-shadow: 0 2px 10px rgba(0,0,0,0.1); z-index: 1000; padding: 0.5rem 4rem; }
        .header-content { display: flex; justify-content: space-between; align-items: center; max-width: 1400px; margin: 0 auto; }
        .logo { font-size: 2.5rem; font-weight: 900; color: #333; }
        nav ul { display: flex; gap: 2rem; list-style: none; }
        nav a { text-decoration: none; color: #555; font-weight: 600; transition: 0.3s; }
        nav a:hover { color: var(--primary); }
        .hero { min-height: 100vh; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920') center/cover; display: grid; grid-template-columns: 1.2fr 0.8fr; align-items: center; gap: 2rem; padding: 8rem 4rem 4rem; color: white; }
        .brand { color: var(--primary); font-size: 4rem; font-weight: 800; display: block; }
        .contact-form { background: white; padding: 2rem; border-radius: 15px; color: #333; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .form-group { margin-bottom: 1rem; text-align: right; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; }
        .form-group input, .form-group select { width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 8px; }
        .submit-btn { width: 100%; padding: 1rem; background: var(--primary); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
        section { padding: 5rem 4rem; max-width: 1400px; margin: 0 auto; }
        .section-title { font-size: 2.5rem; text-align: center; margin-bottom: 3rem; }
        .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .overview-image { width: 100%; border-radius: 20px; }
        .units-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        .unit-card { border: 2px solid #eee; padding: 2rem; border-radius: 20px; text-align: center; transition: 0.3s; }
        .unit-card:hover { border-color: var(--primary); transform: translateY(-10px); }
        .payment-section { background: linear-gradient(135deg, var(--primary), #ff7a50); color: white; padding: 4rem; border-radius: 20px; text-align: center; }
        .payment-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 2rem; }
        footer { background: #111; color: white; padding: 4rem; text-align: center; }
        .whatsapp-btn { position: fixed; bottom: 30px; left: 30px; background: #25D366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; text-decoration: none; z-index: 1000; }
        @media (max-width: 968px) { .hero, .overview-grid, .payment-grid { grid-template-columns: 1fr; } .header { padding: 1rem; } nav { display: none; } }
      `}</style>

      <header className="header">
        <div className="header-content">
          <div className="logo">T.</div>
          <nav>
            <ul>
              <li><a href="#hero">المشروع</a></li>
              <li><a href="#overview">الموقع</a></li>
              <li><a href="#units">الوحدات</a></li>
              <li><a href="#payment">أنظمة السداد</a></li>
            </ul>
          </nav>
          <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>01070752370</div>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="hero-content" style={{ textAlign: 'right' }}>
          <h1><span className="brand">Il Monte Galala</span> المونت جلالة</h1>
          <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>أبراج فندقية فاخرة على البحر مباشرة - تطوير مصر</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', justifyContent: 'flex-end' }}>
            <div><h3>5%</h3><p>مقدم</p></div>
            <div><h3>2028</h3><p>التسليم</p></div>
            <div><h3>10</h3><p>أبراج</p></div>
          </div>
        </div>
        <div className="contact-form">
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>احجز استشارة مجانية</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group"><label>الاسم الكامل</label><input type="text" name="name" onChange={handleChange} required /></div>
            <div className="form-group"><label>رقم الهاتف</label><input type="tel" name="phone" onChange={handleChange} required /></div>
            <div className="form-group">
              <label>نوع الوحدة</label>
              <select name="unitType">
                <option>ستوديو</option>
                <option>غرفة نوم واحدة</option>
                <option>غرفتين نوم</option>
                <option>بنتهاوس</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">إرسال الطلب</button>
          </form>
        </div>
      </section>

      <section id="overview">
        <div className="overview-grid">
          <img src="/WhatsApp-Image-2026-02-08-at-23_59_18.jpeg" alt="Project Overview" className="overview-image" />
          <div style={{ textAlign: 'right' }}>
            <h2 className="section-title" style={{ textAlign: 'right' }}>نبذة عن المشروع</h2>
            <p style={{ lineHeight: '1.8', color: '#666', fontSize: '1.1rem' }}>
              مشروع استثنائي على جبل الجلالة بالعين السخنة. أول أبراج سكنية فندقية بارتفاع 22 دور بإطلالة بانورامية كاملة على البحر الأحمر وتحت إدارة عالمية من Marriott.
            </p>
          </div>
        </div>
      </section>

      <section id="units">
        <h2 className="section-title">الوحدات المتاحة</h2>
        <div className="units-grid">
          <div className="unit-card"><h3>ستوديو</h3><p>60 م²</p><p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>10,000,000 ج.م</p></div>
          <div className="unit-card"><h3>غرفة واحدة</h3><p>90 م²</p><p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>15,000,000 ج.م</p></div>
          <div className="unit-card"><h3>غرفتين</h3><p>140 م²</p><p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>22,000,000 ج.م</p></div>
        </div>
      </section>

      <section id="payment">
        <div className="payment-section">
          <h2>أنظمة السداد</h2>
          <div className="payment-grid">
            <div><h3>5%</h3><p>مقدم حجز</p></div>
            <div><h3>10 سنوات</h3><p>تقسيط</p></div>
            <div><h3>2028</h3><p>الاستلام</p></div>
          </div>
        </div>
      </section>

      <footer>
        <p>جميع الحقوق محفوظة &copy; 2026 IL Monte Galala - تطوير مصر</p>
        <p style={{ marginTop: '1rem', opacity: 0.6 }}>01070752370 | العين السخنة</p>
      </footer>

      <a href="https://wa.me/201070752370" className="whatsapp-btn" target="_blank" rel="noreferrer">💬</a>
    </>
  )
}
