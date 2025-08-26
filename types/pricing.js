// types/pricing.js

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} icon
 * @property {string[]} features
 */

/**
 * @typedef {Object} PricingTier
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {string[]} features
 * @property {boolean} [popular]
 */

/**
 * @typedef {Object} ServicePricing
 * @property {Service} service
 * @property {PricingTier[]} tiers
 */

/**
 * @typedef {Object} PaymentData
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} serviceId
 * @property {string} serviceName
 * @property {string} tierId
 * @property {string} tierName
 * @property {number} price
 */

/**
 * @typedef {Object} Invoice
 * @property {string} id
 * @property {string} invoiceNumber
 * @property {string} customerName
 * @property {string} customerEmail
 * @property {string} customerPhone
 * @property {string} serviceName
 * @property {string} tierName
 * @property {number} price
 * @property {string} createdAt
 * @property {'paid'|'pending'|'failed'} status
 */
