<img src="/images/characters/silhouette-batsignal.svg" alt="Batsignal" />

<h2>Get in Touch</h2>

<p>Whether you're interested in joining the cast of costumed characters, want to help us raise as much as possible on the day, have some fantastic ideas on how we can raise even more money than before, or if you would just like a little more information, you can use the form below to get in touch with us.</p>

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