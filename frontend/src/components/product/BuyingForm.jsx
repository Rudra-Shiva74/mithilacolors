// AddCustomerForm.js
import React from "react";
import styles from "./AddCustomerForm.module.css";

const BuyingForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Add Customer</h2>
        <p>Add customer and address details</p>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email ID" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter mobile number" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address1">Shipping Address Line 1</label>
            <input type="text" id="address1" placeholder="Address Line 1" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address2">Shipping Address Line 2</label>
            <input type="text" id="address2" placeholder="Address Line 2" />
          </div>

          <div className={styles.formGroupInline}>
            <div className={styles.formGroup}>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" value="India" disabled />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="pincode">Pincode</label>
              <input type="text" id="pincode" placeholder="Enter pincode" />
            </div>
          </div>

          <div className={styles.formGroupInline}>
            <div className={styles.formGroup}>
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                placeholder="Add pincode and we'll autofill here"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="Add pincode and we'll autofill here"
              />
            </div>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="billingAddress" defaultChecked />
            <label htmlFor="billingAddress">
              Billing address same as the shipping address
            </label>
          </div>

          <div className={styles.buttonGroup}>
            <button type="button" className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.addButton}>
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyingForm;