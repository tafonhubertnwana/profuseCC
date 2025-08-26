// import { Client, Databases, Account, ID, Query } from 'appwrite';
// import { DATABASE_ID, PAYMENTS_COLLECTION_ID, INVOICES_COLLECTION_ID } from '@/lib/appwrite';

// // Initialize Appwrite client
// const client = new Client()
//   .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
//   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || 'your-project-id');

// const databases = new Databases(client);
// const account = new Account(client);

// export class AppwriteService {
//   // Save payment data to Appwrite
//   static async savePayment(paymentData, transactionId) {
//     try {
//       const document = await databases.createDocument(
//         DATABASE_ID,
//         PAYMENTS_COLLECTION_ID,
//         ID.unique(),
//         {
//           transactionId,
//           customerName: paymentData.name,
//           customerEmail: paymentData.email,
//           customerPhone: paymentData.phone,
//           serviceId: paymentData.serviceId,
//           serviceName: paymentData.serviceName,
//           tierId: paymentData.tierId,
//           tierName: paymentData.tierName,
//           price: paymentData.price,
//           status: 'completed',
//           createdAt: new Date().toISOString(),
//         }
//       );
//       return document.$id;
//     } catch (error) {
//       console.error('Error saving payment:', error);
//       throw new Error('Failed to save payment data');
//     }
//   }

//   // Save invoice to Appwrite
//   static async saveInvoice(invoice) {
//     try {
//       const document = await databases.createDocument(
//         DATABASE_ID,
//         INVOICES_COLLECTION_ID,
//         ID.unique(),
//         {
//           transactionId: invoice.id,
//           invoiceNumber: invoice.invoiceNumber,
//           customerName: invoice.customerName,
//           customerEmail: invoice.customerEmail,
//           customerPhone: invoice.customerPhone,
//           serviceName: invoice.serviceName,
//           tierName: invoice.tierName,
//           price: invoice.price,
//           status: invoice.status,
//           createdAt: invoice.createdAt,
//         }
//       );
//       return document.$id;
//     } catch (error) {
//       console.error('Error saving invoice:', error);
//       throw new Error('Failed to save invoice data');
//     }
//   }

//   // Get payment by transaction ID
//   static async getPayment(transactionId) {
//     try {
//       const documents = await databases.listDocuments(
//         DATABASE_ID,
//         PAYMENTS_COLLECTION_ID,
//         [Query.equal('transactionId', transactionId)]
//       );
//       return documents.documents[0] || null;
//     } catch (error) {
//       console.error('Error fetching payment:', error);
//       return null;
//     }
//   }

//   // Get all payments
//   static async getAllPayments() {
//     try {
//       const documents = await databases.listDocuments(
//         DATABASE_ID,
//         PAYMENTS_COLLECTION_ID,
//         [Query.orderDesc('$createdAt')]
//       );
//       return documents.documents;
//     } catch (error) {
//       console.error('Error fetching payments:', error);
//       return [];
//     }
//   }

//   // Get invoice by invoice number
//   static async getInvoice(invoiceNumber) {
//     try {
//       const documents = await databases.listDocuments(
//         DATABASE_ID,
//         INVOICES_COLLECTION_ID,
//         [Query.equal('invoiceNumber', invoiceNumber)]
//       );
//       return documents.documents[0] || null;
//     } catch (error) {
//       console.error('Error fetching invoice:', error);
//       return null;
//     }
//   }

//   // Initialize database collections (run once)
//   static async initializeDatabase() {
//     try {
//       // This would typically be done through Appwrite Console
//       console.log('Database initialization should be done through Appwrite Console');
//       console.log('Collections needed:');
//       console.log('- payments: transactionId, customerName, customerEmail, customerPhone, serviceId, serviceName, tierId, tierName, price, status, createdAt');
//       console.log('- invoices: transactionId, invoiceNumber, customerName, customerEmail, customerPhone, serviceName, tierName, price, status, createdAt');
//     } catch (error) {
//       console.error('Error initializing database:', error);
//     }
//   }
// }

// // Email service using a demo implementation
// export class EmailService {
//   static async sendInvoice(invoice, invoiceHTML) {
//     try {
//       // In a real implementation, you would use a service like Resend, SendGrid, etc.
//       console.log('=== DEMO EMAIL SERVICE ===');
//       console.log(`Sending invoice to: ${invoice.customerEmail}`);
//       console.log(`Subject: Invoice ${invoice.invoiceNumber} - Payment Confirmation`);
//       console.log('Invoice HTML generated and would be sent');
      
//       // Simulate email sending delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Also send to company email (demo)
//       console.log('Sending copy to company email: billing@profusecc.ai');
      
//       return true;
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return false;
//     }
//   }
// }
