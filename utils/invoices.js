// utils/invoice.js

export function generateInvoiceNumber() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.random().toString(36).substr(2, 4).toUpperCase();
  
  return `INV-${year}${month}${day}-${random}`;
}

export function createInvoice(paymentData, transactionId) {
  return {
    id: transactionId,
    invoiceNumber: generateInvoiceNumber(),
    customerName: paymentData.name,
    customerEmail: paymentData.email,
    customerPhone: paymentData.phone,
    serviceName: paymentData.serviceName,
    tierName: paymentData.tierName,
    price: paymentData.price,
    createdAt: new Date().toISOString(),
    status: 'paid'
  };
}

export function generateInvoiceHTML(invoice) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice - ${invoice.invoiceNumber}</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .invoice-container {
                background: white;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #3B82F6, #8B5CF6);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 2.5em;
                font-weight: 700;
            }
            .header p {
                margin: 10px 0 0 0;
                opacity: 0.9;
                font-size: 1.1em;
            }
            .content {
                padding: 30px;
            }
            .invoice-details {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                margin-bottom: 30px;
            }
            .detail-section h3 {
                color: #3B82F6;
                border-bottom: 2px solid #e5e7eb;
                padding-bottom: 10px;
                margin-bottom: 15px;
            }
            .detail-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
                padding: 5px 0;
            }
            .detail-row:nth-child(even) {
                background-color: #f8f9fa;
                margin: 0 -15px;
                padding: 8px 15px;
                border-radius: 5px;
            }
            .service-details {
                background: #f8f9fa;
                border-radius: 10px;
                padding: 25px;
                margin: 30px 0;
                border-left: 5px solid #3B82F6;
            }
            .total-section {
                background: linear-gradient(135deg, #10B981, #059669);
                color: white;
                padding: 25px;
                border-radius: 10px;
                text-align: center;
                margin: 30px 0;
            }
            .total-amount {
                font-size: 2.5em;
                font-weight: 800;
                margin: 10px 0;
            }
            .footer {
                text-align: center;
                padding: 30px;
                background-color: #f8f9fa;
                border-top: 1px solid #e5e7eb;
            }
            .status-paid {
                background: #10B981;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-weight: 600;
                display: inline-block;
                margin: 10px 0;
            }
            @media (max-width: 600px) {
                .invoice-details {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="invoice-container">
            <div class="header">
                <h1>ProfuseCC.ai</h1>
                <p>Professional Digital Solutions</p>
            </div>
            
            <div class="content">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h2 style="color: #3B82F6; margin: 0;">INVOICE</h2>
                    <p style="font-size: 1.2em; color: #6b7280; margin: 5px 0;">${invoice.invoiceNumber}</p>
                    <div class="status-paid">PAID</div>
                </div>
                
                <div class="invoice-details">
                    <div class="detail-section">
                        <h3>Bill To:</h3>
                        <div class="detail-row">
                            <span><strong>Name:</strong></span>
                            <span>${invoice.customerName}</span>
                        </div>
                        <div class="detail-row">
                            <span><strong>Email:</strong></span>
                            <span>${invoice.customerEmail}</span>
                        </div>
                        <div class="detail-row">
                            <span><strong>Phone:</strong></span>
                            <span>${invoice.customerPhone}</span>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Invoice Details:</h3>
                        <div class="detail-row">
                            <span><strong>Invoice Date:</strong></span>
                            <span>${formatDate(invoice.createdAt)}</span>
                        </div>
                        <div class="detail-row">
                            <span><strong>Transaction ID:</strong></span>
                            <span style="font-family: monospace;">${invoice.id}</span>
                        </div>
                        <div class="detail-row">
                            <span><strong>Payment Status:</strong></span>
                            <span style="color: #10B981; font-weight: 600;">PAID</span>
                        </div>
                    </div>
                </div>
                
                <div class="service-details">
                    <h3 style="color: #3B82F6; margin-top: 0;">Service Details</h3>
                    <div class="detail-row">
                        <span><strong>Service:</strong></span>
                        <span>${invoice.serviceName}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Plan:</strong></span>
                        <span>${invoice.tierName}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Description:</strong></span>
                        <span>${invoice.serviceName} - ${invoice.tierName} Plan</span>
                    </div>
                </div>
                
                <div class="total-section">
                    <h3 style="margin: 0; opacity: 0.9;">Total Amount</h3>
                    <div class="total-amount">$${invoice.price.toFixed(2)}</div>
                    <p style="margin: 0; opacity: 0.8;">Payment completed successfully</p>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Thank you for choosing ProfuseCC.ai!</strong></p>
                <p>Our team will contact you within 24 hours to discuss your project details.</p>
                <p style="margin-top: 20px; color: #6b7280; font-size: 0.9em;">
                    For questions about this invoice, please contact us at billing@profusecc.ai<br>
                    Visit us at: <a href="https://profusecc.ai" style="color: #3B82F6;">www.profusecc.ai</a>
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
}

// Email template for sending invoice
export function generateInvoiceEmailTemplate(invoice) {
  return `
    Subject: Invoice ${invoice.invoiceNumber} - Payment Confirmation
    
    Dear ${invoice.customerName},
    
    Thank you for your payment! We've successfully processed your order for ${invoice.serviceName} - ${invoice.tierName} plan.
    
    Transaction Details:
    - Invoice Number: ${invoice.invoiceNumber}
    - Transaction ID: ${invoice.id}
    - Amount Paid: $${invoice.price}
    - Service: ${invoice.serviceName} (${invoice.tierName})
    - Date: ${new Date(invoice.createdAt).toLocaleDateString()}
    
    What's Next:
    1. Our team will review your requirements and contact you within 24 hours
    2. We'll schedule a consultation call to discuss project details
    3. You'll receive a detailed project timeline and milestones
    
    If you have any questions, please don't hesitate to contact us at support@profusecc.ai
    
    Best regards,
    The ProfuseCC.ai Team
    
    ---
    This is an automated email. Please find your detailed invoice attached.
  `;
}
