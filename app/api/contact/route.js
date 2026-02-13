import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, email, message } = body

    // إرسال الإيميل عبر Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'IL Monte Galala <onboarding@resend.dev>',
        to: ['apkzoz85@gmail.com'], // غير الإيميل ده بإيميلك
        subject: `استفسار جديد من ${name} - IL Monte Galala`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #FF4713, #ff6b3d); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">IL Monte Galala</h1>
              <p style="color: white; margin: 10px 0 0 0;">المونت جلالة - تطوير مصر</p>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px;">
              <h2 style="color: #333; margin-top: 0;">استفسار جديد 📧</h2>
              
              <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>الاسم:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>رقم الهاتف:</strong> <a href="tel:${phone}" style="color: #FF4713; text-decoration: none;">${phone}</a></p>
                ${email ? `<p style="margin: 10px 0;"><strong>البريد الإلكتروني:</strong> <a href="mailto:${email}" style="color: #FF4713; text-decoration: none;">${email}</a></p>` : ''}
                ${message ? `<p style="margin: 10px 0;"><strong>الرسالة:</strong><br/>${message}</p>` : ''}
              </div>
              
              <div style="background: #fff5f2; padding: 15px; border-radius: 10px; border-right: 4px solid #FF4713;">
                <p style="margin: 0; color: #666;">
                  💡 <strong>نصيحة:</strong> يُفضل الرد خلال 24 ساعة لزيادة فرص التحويل
                </p>
              </div>
            </div>
            
            <div style="background: #333; padding: 20px; text-align: center; color: white;">
              <p style="margin: 0; font-size: 14px;">© 2026 IL Monte Galala - تطوير مصر</p>
              <p style="margin: 10px 0 0 0; font-size: 12px; color: #999;">
                هذا الإيميل تم إرساله تلقائياً من موقع IL Monte Galala
              </p>
            </div>
          </div>
        `
      })
    })

    const data = await res.json()

    if (res.ok) {
      return NextResponse.json({ success: true, message: 'تم إرسال الرسالة بنجاح' })
    } else {
      console.error('Resend error:', data)
      return NextResponse.json({ success: false, error: data }, { status: 400 })
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
