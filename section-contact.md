<div class="container">

<img src="/images/characters/SIL_BATSIGNAL.svg" alt="Batsignal" />

<h2>Get in Touch</h2>

<p>Want to join the cast, volunteer on the day, pitch a fundraising idea, or just ask a question? Use the form below and we’ll get back to you.</p>

<form action="https://formzest.lemonarc.com/8fc21011-c1d5-40ac-b11f-1ea224b3b207" method="post" id="contact-form" onsubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Please indicate that you have read and agree to the Privacy Policy'); return false; }">
	<input type="text" name="_gotcha" style="display:none" />
	<input type="hidden" name="_next" value="/contact-success">
	<input type="hidden" name="_subject" value="Invasion Colchester Contact Form" />
	<label>Your Name</label>
	<input type="text" name="Name" required>
	<label>Your Email</label>
	<input type="email" name="_replyto" required>
	<label>Your Message</label>
	<textarea name="Message" required></textarea>
	<p><input type="checkbox" name="checkbox" value="check" id="agree" required /> I have read and agree to the <a href="/privacy-policy/" alt="Privacy Policy" rel="noopener" target="_blank">Privacy Policy</a></p>
	
	<script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>
	
	<input type="submit" value="Send Us A Message" class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>
</form>

</div>