package javapro.guice;

import javax.inject.Singleton;

import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import javapro.HelloService;
import javapro.HelloServiceImpl;
import javapro.ThrowableMapper;
import javapro.HelloResource;

public class AppModule extends AbstractModule {

  @Override
  protected void configure() {
    bind(HelloResource.class);

    bind(ThrowableMapper.class);
  }

  @Provides
  @Singleton
  public HelloService helloService() {
    return new HelloServiceImpl();
  }

}
