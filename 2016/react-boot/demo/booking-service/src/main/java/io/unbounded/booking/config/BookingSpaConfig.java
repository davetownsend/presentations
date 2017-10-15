package io.unbounded.booking.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.ResourceResolver;
import org.springframework.web.servlet.resource.ResourceResolverChain;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Used to resolve all requests to the single index.html file
 * Page routing will be handled in static UI via react-router
 * (thanks to @geowarin for this config pattern)
 */
@Configuration
public class BookingSpaConfig extends WebMvcConfigurerAdapter {

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/**")
            .addResourceLocations("classpath:/static/")
            .resourceChain(false)
            .addResolver(new SPAResourceResolver());
  }


  private class SPAResourceResolver implements ResourceResolver {

    private Resource page = new ClassPathResource("/static/index.html");
    private List<String> handledExtensions = Arrays.asList("html", "js", "json", "css", "png", "svg", "jpg", "gif", "ico");
    private List<String> ignoredPaths = Collections.singletonList("api");


    @Override
    public Resource resolveResource(
            HttpServletRequest request, String requestPath, List<? extends Resource> locations, ResourceResolverChain chain) {
      return resolve(requestPath, locations);
    }


    @Override
    public String resolveUrlPath(String resourcePath, List<? extends Resource> locations, ResourceResolverChain chain) {
      Resource resolvedResource = resolve(resourcePath, locations);
      if (resolvedResource == null) {
        return null;
      }
      try {
        return resolvedResource.getURL().toString();
      } catch (IOException e) {
        return resolvedResource.getFilename();
      }
    }


    private Resource resolve(String requestPath, List<? extends Resource> locations) {
      if (isIgnoredPath(requestPath)) {
        return null;
      }
      if (isHandledExtension(requestPath)) {
        return locations.stream()
                .map(location -> createRelative(location, requestPath))
                .filter(resource -> resource != null && resource.exists())
                .findFirst()
                .orElseGet(null);
      }
      return page;
    }


    private Resource createRelative(Resource resource, String relativePath) {
      try {
        return resource.createRelative(relativePath);
      } catch (IOException e) {
        return null;
      }
    }


    private boolean isHandledExtension(String path) {
      String extension = StringUtils.getFilenameExtension(path);
      return handledExtensions.stream().anyMatch(ext -> ext.equals(extension));
    }


    private boolean isIgnoredPath(String path) {
      return ignoredPaths.contains(path);
    }
  }
}